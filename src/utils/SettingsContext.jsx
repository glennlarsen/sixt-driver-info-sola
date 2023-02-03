import React, { createContext } from "react";
import useLocalStorage from "./UseLocalStorage";

export const SettingsContext = createContext();

export const SettingsProvider = props => {
  const [upperCase, setUpperCase] = useLocalStorage("upperCase", true);
  document.documentElement.setAttribute("upperCase", upperCase);

  return (
    <SettingsContext.Provider value={[ upperCase, setUpperCase ]}>
      { props.children }
    </SettingsContext.Provider>
  )
}