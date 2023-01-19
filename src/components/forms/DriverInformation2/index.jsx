import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import DoneIcon from "@mui/icons-material/Done";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSpring, animated } from "@react-spring/web";

import schema from "constants/schema";
import SendDriverInfo2 from "utils/SendDriverInfo2";
import AlertMessage from "components/AlertMessage";
import PhoneInput from "components/common/PhoneInput";
import CountryInput from "components/common/CountryInput";
import StreetInput from "components/common/StreetInput";
import PostalInput from "components/common/PostalInput";
import CityInput from "components/common/CityInput";
import EmailInput from "components/common/EmailInput";
import { content } from "constants/DriverFormContent";
import { LangContext } from "utils/LangContext";
import ScrollTo from "components/common/ScrollTo";

function DriverInformation2() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [defaultCallingCode, setDefaultCallingCode] = useState("NO");
  const [lang] = useContext(LangContext);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onReset = () => {
    reset();
    setDefaultCallingCode("NO");
  };

  // Function that will run when form is submitted
  async function onSubmit(data) {
    setLoading(true);
    const message = await SendDriverInfo2(data);
    if (message.success) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
      setSubmitted(true);
      reset();
    } else {
      setLoading(false);
      setSubmitted(false);
      setError(true);
    }
  }

  const slide = useSpring({
    from: { x: -1000 },
    to: { x: 0 },
    reset: true,
    config: { duration: 400 },
  });

  const opacity = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    reset: true,
    config: { duration: 900 },
  });

  if (/Android/.test(navigator.appVersion)) {
    window.addEventListener("resize", function () {
      if (
        document.activeElement.tagName == "INPUT" ||
        document.activeElement.tagName == "TEXTAREA"
      ) {
        window.setTimeout(function () {
          document.activeElement.scrollIntoView({
            behavior: "auto",
            block: "center",
          });
        }, 0);
      }
    });
  }

  if (loading && submitted) {
    return (
      <animated.div style={slide}>
        <div className="loaderContainer form-complete">
          <animated.div style={opacity}>
            <DoneIcon sx={{ fontSize: 100, color: "#FF5F00" }} />
          </animated.div>
          {content[lang]["confirmation"]}
        </div>
      </animated.div>
    );
  }

  if (error) {
    return (
      <AlertMessage
        variant="error"
        title="Error"
        message="An error occured, Please try again later"
      />
    );
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <CountryInput
        control={control}
        errors={errors}
        defaultValue=""
        onCountrySelect={setDefaultCallingCode}
      />
      <StreetInput
        register={register}
        errors={errors}
        onClick={() => ScrollTo("street")}
      />
      <Box gap={2} display="flex">
        <PostalInput
          register={register}
          errors={errors}
          onClick={() => ScrollTo("postal")}
        />
        <CityInput
          register={register}
          errors={errors}
          onClick={() => ScrollTo("city")}
        />
      </Box>
      <PhoneInput
        control={control}
        errors={errors}
        defaultValue={defaultCallingCode}
        onClick={() => ScrollTo("tel")}
      />
      <EmailInput
        register={register}
        errors={errors}
        onClick={() => ScrollTo("email")}
      />
      <button type="submit">{content[lang]["submit"]}</button>
      <span onClick={() => onReset()} className="btn-reset">
        {content[lang]["reset"]}
      </span>
    </Box>
  );
}

export default DriverInformation2;
