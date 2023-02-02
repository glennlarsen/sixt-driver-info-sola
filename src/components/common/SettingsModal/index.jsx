import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#FF5F00",
  color: "white",
  boxShadow: 24,
  p: 4,
  borderRadius: "12px",
};

const theme = createTheme({
  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          // Controls default (unchecked) color for the thumb
          color: "#ccc",
        },
        colorPrimary: {
          "&.Mui-checked": {
            // Controls checked color for the thumb
            color: "#FF721E",
          },
        },
        track: {
          // Controls default (unchecked) color for the track
          opacity: 0.7,
          backgroundColor: "grey",
          ".Mui-checked.Mui-checked + &": {
            // Controls checked color for the track
            opacity: 0.8,
            backgroundColor: "#fff",
          },
        },
      },
    },
  },
});

function SettingsModal({ open, handleClose, settings, setSettings }) {
  const handleChange = (event) => {
    setSettings({
      ...settings,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
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
                    <Switch
                      checked={settings.phone}
                      onChange={handleChange}
                      name="phone"
                    />
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
              </FormGroup>
              <button className="btn-close" onClick={handleClose}>
                Close
              </button>
            </Box>
          </Fade>
        </Modal>
      </div>
    </ThemeProvider>
  );
}

export default SettingsModal;
