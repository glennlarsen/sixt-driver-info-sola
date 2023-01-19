import { useContext } from "react";
import FormTextField from "../FormTextField";
import InputAdornment from "@mui/material/InputAdornment";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import { content } from "constants/DriverFormContent";
import { LangContext } from "utils/LangContext";

const PostalInput = ({ register, errors }) => {
  const [lang] = useContext(LangContext);

  return (
    <FormTextField
      variant="standard"
      label={content[lang]["postal"]}
      type="text"
      {...register("postal")}
      error={Boolean(errors.postal)}
      helperText={errors.postal ? errors.postal.message : ""}
      inputProps={{
        autoComplete: "chrome-off",
      }}
      InputProps={
        errors.postal
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

export default PostalInput;
