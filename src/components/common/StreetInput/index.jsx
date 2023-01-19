import { useContext } from "react";
import FormTextField from "../FormTextField";
import InputAdornment from "@mui/material/InputAdornment";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import { content } from "constants/DriverFormContent";
import { LangContext } from "utils/LangContext";

const StreetInput = ({ register, errors, onClick }) => {
  const [lang] = useContext(LangContext);

  return (
    <FormTextField
      variant="standard"
      label={content[lang]["street"]}
      type="text"
      id="street"
      name="street"
      fullWidth
      onClick={onClick}
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
