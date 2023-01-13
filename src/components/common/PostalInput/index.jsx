import FormTextField from "../FormTextField";
import InputAdornment from "@mui/material/InputAdornment";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

const PostalInput = ({ register, errors }) => {
  return (
    <FormTextField
      variant="standard"
      label="Postal Code"
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
