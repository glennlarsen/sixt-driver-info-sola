import { useContext } from "react";
import FormTextField from "../FormTextField";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import countries from "constants/countries";
import { Controller } from "react-hook-form";
import { content } from "constants/DriverFormContent";
import { LangContext } from "utils/LangContext";

const CountryInput = ({ control, errors, defaultValue, onCountrySelect }) => {
  const [lang] = useContext(LangContext);

  return (
    <Controller
      control={control}
      name="country"
      id="country"
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <Autocomplete
          onInputChange={(event, option) => {
            onChange(option);
          }}
          inputValue={value}
          onChange={(event, value) =>
            onCountrySelect(value ? value.code : "NO")
          }
          options={countries}
          autoHighlight
          disablePortal
          freeSolo
          id="country"
          getOptionLabel={(option) => (option.label ? option.label : "")}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=""
              />
              {option.label}
            </Box>
          )}
          renderInput={(params) => (
            <FormTextField
              {...params}
              label={content[lang]["country"]}
              variant="standard"
              placeholder="Start typing.."
              error={Boolean(errors.country)}
              helperText={errors.country ? errors.country.message : ""}
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password",
              }}
            />
          )}
        />
      )}
    />
  );
};

export default CountryInput;
