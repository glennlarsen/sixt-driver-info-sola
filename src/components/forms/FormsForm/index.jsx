import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { useNavigate } from "react-router-dom";
import Header from "components/Header";

const FormsForm = ({title}) => {
  const navigate = useNavigate();

  const clickForm1 = () => {
    navigate("/form/sola1");
  };

  const clickForm2 = () => {
    navigate("/form/sola2");
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Header title={title} />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <Paper onClick={clickForm1} className="box">
            Sola 1
          </Paper>
        </Grid>
        <Grid xs={6}>
          <Paper onClick={clickForm2} className="box">
            Sola 2
          </Paper>
        </Grid>
        <Grid xs={6}>
          <Paper className="box box-inactive">Sola 3</Paper>
        </Grid>
        <Grid xs={6}>
          <Paper className="box box-inactive">Sola 4</Paper>
        </Grid>
        <Grid xs={6}>
          <Paper className="box-new box-inactive">New form</Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormsForm;
