import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import ModalLayout from "../ModalLayout";

function SettingsModal({
  open,
  handleClose,
  settings,
  setSettings,
  unregister,
  errors,
  setDisableButton,
  disableButton,
}) {
  const handleChange = (event) => {
    setSettings({
      ...settings,
      [event.target.name]: event.target.checked,
    });
    if (!event.target.checked && errors[event.target.name]) {
      unregister([event.target.name]);
    }
    setDisableButton(event.target.checked);
  };

  return (
    <ModalLayout open={open} handleClose={handleClose}>
      <Typography id="transition-modal-title" variant="h6" component="h2">
        Show / Hide fields
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={settings.address}
              onChange={handleChange}
              name="address"
            />
          }
          label="Address"
        />
        <FormControlLabel
          control={
            <Switch checked={settings.tel} onChange={handleChange} name="tel" />
          }
          label="Phone"
        />
        <FormControlLabel
          control={
            <Switch
              checked={settings.email}
              onChange={handleChange}
              name="email"
            />
          }
          label="Email"
        />
        <Typography
          id="transition-modal-title"
          variant="h6"
          component="h2"
          mt={3}
        >
          Disable Send Button
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={disableButton}
              onChange={handleChange}
              name="button"
            />
          }
          label="Disable Button"
        />
      </FormGroup>
      <button className="btn-close" onClick={handleClose}>
        Close
      </button>
    </ModalLayout>
  );
}

export default SettingsModal;
