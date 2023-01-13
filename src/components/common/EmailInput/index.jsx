import FormTextField from "../FormTextField";
import InputAdornment from "@mui/material/InputAdornment";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

const EmailInput = ({ register, errors }) => {
  return (
    <FormTextField
      variant="standard"
      label="Email"
      type="email"
      inputProps={{
        autoComplete: "chrome-off",
      }}
      placeholder="Your@email.com"
      {...register("email")}
      error={Boolean(errors.email)}
      helperText={errors.email ? errors.email.message : ""}
      InputProps={
        errors.email
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

export default EmailInput;
