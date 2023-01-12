import React from "react";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
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

const PhoneInput = ({ control, errors }) => {
  return (
    <Controller
      name="tel"
      control={control}
      rules={{ validate: matchIsValidTel }}
      render={({ field, fieldState }) => (
        <MuiTelInputStyled
          {...field}
          defaultCountry="NO"
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
          helperText={fieldState.invalid ? "phone number is invalid" : ""}
          error={fieldState.invalid}
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
