import React, { useContext } from "react";
import { LangContext } from "utils/LangContext";
import { GB, ES, FR, DE, NO } from "country-flag-icons/react/3x2";
import { TabletAndDesktop, Mobile } from "../ScreenViewSizes";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const LanguageSelector = (props) => {
  const [lang, setLang] = useContext(LangContext);

  let handleChange = (value) => {
    setLang(value);
    localStorage.setItem("lang", value);
    document.documentElement.setAttribute("lang", value);
  };

  let handleChangeSelect = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    document.documentElement.setAttribute("lang", event.target.value);
  };

  return (
    <>
      <TabletAndDesktop>
        <div className="language-selector">
          <label>Langauge : </label>
          <div>
            <GB
              title="English"
              onClick={() => handleChange("en")}
              value={lang}
              className="language-flags"
            />
            <ES
              title="español"
              onClick={() => handleChange("es")}
              value={lang}
              className="language-flags"
            />
            <FR
              title="Français"
              onClick={() => handleChange("fr")}
              value={lang}
              className="language-flags"
            />
            <DE
              title="Deutsch"
              onClick={() => handleChange("de")}
              value={lang}
              className="language-flags"
            />
            <NO
              title="Norsk"
              onClick={() => handleChange("no")}
              value={lang}
              className="language-flags"
            />
          </div>
        </div>
      </TabletAndDesktop>
      <Mobile>
        <Box sx={{ minWidth: 60 }} className="language-selector">
          <FormControl variant="standard" fullWidth>
            <InputLabel id="language-select-input-label">Language</InputLabel>
            <Select
              labelId="language-select-label"
              id="language-select"
              value={lang}
              label="Language"
              onChange={handleChangeSelect}
              sx={{
                ":after": { borderBottomColor: "#FF5F00" },
              }}
            >
              <MenuItem value="en">
                <GB />
              </MenuItem>
              <MenuItem value="es">
                <ES />
              </MenuItem>
              <MenuItem value="fr">
                <FR />
              </MenuItem>
              <MenuItem value="de">
                <DE />
              </MenuItem>
              <MenuItem value="no">
                <NO />
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Mobile>
    </>
  );
};
export default LanguageSelector;
