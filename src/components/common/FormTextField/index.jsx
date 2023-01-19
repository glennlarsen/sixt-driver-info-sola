import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const FormTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#FF5F00",
  },
});

export default FormTextField;
