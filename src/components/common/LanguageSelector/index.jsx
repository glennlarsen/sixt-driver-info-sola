import React, { useContext } from "react";
import { LangContext } from "utils/LangContext";
import { GB, ES, FR, DE, NO } from "country-flag-icons/react/3x2";

const LanguageSelector = (props) => {
  const [lang, setLang] = useContext(LangContext);

  let handleChange = (value) => {
    setLang(value);
    localStorage.setItem("lang", value);
    document.documentElement.setAttribute("lang", value);
  };

  return (
    <div className="language-selector">
      <label>Langauge : </label>
      <div>
        <GB
          title="United Kingdom"
          onClick={() => handleChange("en")}
          value={lang}
          className="language-flags"
        />
        <ES
          title="Spain"
          onClick={() => handleChange("es")}
          value={lang}
          className="language-flags"
        />
        <FR
          title="France"
          onClick={() => handleChange("fr")}
          value={lang}
          className="language-flags"
        />
        <DE
          title="Germany"
          onClick={() => handleChange("de")}
          value={lang}
          className="language-flags"
        />
        <NO
          title="Norway"
          onClick={() => handleChange("no")}
          value={lang}
          className="language-flags"
        />
      </div>
    </div>
  );
};
export default LanguageSelector;
