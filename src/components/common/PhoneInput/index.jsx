import React from "react";
import { MuiTelInput } from "mui-tel-input";
import { styled } from "@mui/material/styles";
import { Controller } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

const MuiTelInputStyled = styled(MuiTelInput)({
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#FF5F00",
  },
});

const PhoneInput = ({ control, errors, defaultValue }) => {
  return (
    <Controller
      name="tel"
      defaultValue=""
      control={control}
      render={({ field }) => (
        <MuiTelInputStyled
          {...field}
          defaultCountry={defaultValue}
          forceCallingCode
          focusOnSelectCountry
          preferredCountries={[
            "NO",
            "SE",
            "DK",
            "DE",
            "US",
            "GB",
            "ES",
            "FR",
            "NL",
            "AU",
            "FI",
            "PL",
          ]}
          variant="standard"
          label="Phone Number"
          error={Boolean(errors.tel)}
          helperText={errors.tel ? errors.tel.message : ""}
          InputProps={
            errors.tel
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <ErrorRoundedIcon color="error" />
                    </InputAdornment>
                  ),
                }
              : null
          }
        />
      )}
    />
  );
};

export default PhoneInput;
