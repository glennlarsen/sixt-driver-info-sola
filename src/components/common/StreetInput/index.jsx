import FormTextField from "../FormTextField";
import InputAdornment from "@mui/material/InputAdornment";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

const StreetInput = ({ register, errors }) => {
  return (
    <FormTextField
      variant="standard"
      label="Street"
      type="text"
      placeholder="Home address..."
      {...register("street")}
      error={Boolean(errors.street)}
      autoComplete="off"
      helperText={errors.street ? errors.street.message : ""}
      inputProps={{
        autoComplete: "chrome-off",
      }}
      InputProps={
        errors.street
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
  );
};

export default StreetInput;
