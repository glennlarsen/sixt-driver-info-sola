import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { useNavigate, useParams } from "react-router-dom";

function FormDetails() {
  const navigate = useNavigate();
  const { formName } = useParams();

  console.log(formName);

  const onClickLiveForm = () => {
    if (formName === "flesland1") {
      navigate("/liveForm/flesland1");
    }
    if (formName === "flesland2") {
      navigate("/liveForm/flesland2");
    }
    if (formName === "flesland3") {
      navigate("/liveForm/flesland3");
    }
  };

  const onClickAnswers = () => {
    if (formName === "flesland1") {
      navigate("/answers/flesland1");
    }
    if (formName === "flesland2") {
      navigate("/answers/flesland2");
    }
    if (formName === "flesland3") {
      navigate("/answers/flesland3");
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <Paper onClick={onClickLiveForm} className="box">
            Live Form
          </Paper>
        </Grid>
        <Grid xs={6}>
          <Paper onClick={onClickAnswers} className="box">
            Answers
          </Paper>
        </Grid>
        <Grid xs={6}>
          <Paper className="box box-inactive">Edit Form</Paper>
        </Grid>
        <Grid xs={6}>
          <Paper className="box box-inactive">Delete Form</Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FormDetails;
