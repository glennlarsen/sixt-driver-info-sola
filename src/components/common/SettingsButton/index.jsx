import Fab from "@mui/material/Fab";
import SettingsIcon from "@mui/icons-material/Settings";

const fabStyles = {
  "&.MuiFab-root": {
    background: "#191919",
    color: "white",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  "&:hover": {
    background: "#000000",
  },
};

function SettingsButton({ handleSettings }) {
  return (
    <Fab
      size="small"
      sx={fabStyles}
      aria-label="settings"
      onClick={handleSettings}
    >
      <SettingsIcon fontSize="small" />
    </Fab>
  );
}

export default SettingsButton;
