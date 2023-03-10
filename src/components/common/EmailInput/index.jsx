import { useContext } from "react";
import FormTextField from "../FormTextField";
import InputAdornment from "@mui/material/InputAdornment";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import { content } from "constants/DriverFormContent";
import { LangContext } from "utils/LangContext";

const EmailInput = ({ register, errors, onClick, show }) => {
  const [lang] = useContext(LangContext);

  if (!show) {
    return null;
  }

  return (
    <FormTextField
      variant="standard"
      label={content[lang]["email"]}
      type="email"
      id="email"
      fullWidth
      onClick={onClick}
      inputProps={{
        autoComplete: "chrome-off",
      }}
      placeholder={content[lang]["emailplaceholder"]}
      {...register("email")}
      error={Boolean(errors.email)}
      helperText={errors.email ? content[lang]["emailerror"] : ""}
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
