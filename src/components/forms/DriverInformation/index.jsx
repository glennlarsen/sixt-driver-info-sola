import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import DoneIcon from "@mui/icons-material/Done";
import { yupResolver } from "@hookform/resolvers/yup";

import schema from "constants/schema";
import SendDriverInfo from "utils/SendDriverInfo";
import AlertMessage from "components/AlertMessage";
import PhoneInput from "components/common/PhoneInput";
import CountryInput from "components/common/CountryInput";
import StreetInput from "components/common/StreetInput";
import PostalInput from "components/common/PostalInput";
import CityInput from "components/common/CityInput";
import EmailInput from "components/common/EmailInput";

const DriverInformation = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [defaultCallingCode, setDefaultCallingCode] = useState("NO");

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
    const message = await SendDriverInfo(data);
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

  if (loading && submitted) {
    return (
      <div className="loaderContainer form-complete">
        <DoneIcon sx={{ fontSize: 100, color: "#FF5F00" }} />
        Thank you! Enjoy your SIXT Experience.
      </div>
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
      <StreetInput register={register} errors={errors} />
      <Box gap={2} display="flex">
        <PostalInput register={register} errors={errors} />
        <CityInput register={register} errors={errors} />
      </Box>
      <PhoneInput
        control={control}
        errors={errors}
        defaultValue={defaultCallingCode}
      />
      <EmailInput register={register} errors={errors} />
      <button type="submit">Submit</button>
      <span onClick={() => onReset()} className="btn-reset">
        Reset fields
      </span>
    </Box>
  );
};

export default DriverInformation;
