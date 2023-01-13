import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { useNavigate } from "react-router-dom";

const FormsForm = () => {
  const navigate = useNavigate();

  const clickForm1 = () => {
    navigate("/form/flesland1");
  };

  const clickForm2 = () => {
    navigate("/form/flesland2");
  };

  const clickForm3 = () => {
    navigate("/form/flesland3");
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <Paper onClick={clickForm1} className="box">
            Flesland 1
          </Paper>
        </Grid>
        <Grid xs={6}>
          <Paper onClick={clickForm2} className="box">
            Flesland 2
          </Paper>
        </Grid>
        <Grid xs={6}>
          <Paper onClick={clickForm3} className="box">
            Flesland 3
          </Paper>
        </Grid>
        <Grid xs={6}>
          <Paper className="box box-inactive">Flesland 4</Paper>
        </Grid>
        <Grid xs={6}>
          <Paper className="box-new box-inactive">New form</Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormsForm;
