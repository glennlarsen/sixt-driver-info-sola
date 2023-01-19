import { useContext } from "react";
import FormTextField from "../FormTextField";
import InputAdornment from "@mui/material/InputAdornment";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import { content } from "constants/DriverFormContent";
import { LangContext } from "utils/LangContext";

const StreetInput = ({ register, errors }) => {
  const [lang] = useContext(LangContext);

  return (
    <FormTextField
      variant="standard"
      label={content[lang]["street"]}
      type="text"
      placeholder={content[lang]["streetplaceholder"]}
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
