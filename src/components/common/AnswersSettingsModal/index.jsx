import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import ModalLayout from "../ModalLayout";
import { SettingsContext } from "utils/SettingsContext";

function AnswersSettingsModal({ open, handleClose }) {
  const [upperCase, setUpperCase] = useContext(SettingsContext);

  console.log(upperCase)

  const handleChange = (event) => {
    setUpperCase(event.target.checked);
    localStorage.setItem("upperCase", event.target.checked);
    document.documentElement.setAttribute("upperCase", event.target.checked);
  };

  return (
    <ModalLayout open={open} handleClose={handleClose}>
      <Typography id="transition-modal-title" variant="h6" component="h2">
        Show big or small letters
      </Typography>
      <FormGroup>
        <Stack direction="row" spacing={1} alignItems="center">
          <FormControlLabel
            sx={{ marginLeft: "0" }}
            control={
              <>
                <Typography>Small letters</Typography>
                <Switch
                  checked={upperCase}
                  onChange={handleChange}
                  name="upperCase"
                />
                <Typography>Big letters</Typography>
              </>
            }
          />
        </Stack>
      </FormGroup>
      <button className="btn-close" onClick={handleClose}>
        Close
      </button>
    </ModalLayout>
  );
}

export default AnswersSettingsModal;
