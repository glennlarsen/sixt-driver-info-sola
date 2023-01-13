import FormTextField from "../FormTextField";
import InputAdornment from "@mui/material/InputAdornment";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

const CityInput = ({ register, errors }) => {
  return (
    <FormTextField
      variant="standard"
      label="City"
      type="text"
      fullWidth
      {...register("city")}
      error={Boolean(errors.city)}
      helperText={errors.city ? errors.city.message : ""}
      inputProps={{
        autoComplete: "chrome-off",
      }}
      InputProps={
        errors.city
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

export default CityInput;
