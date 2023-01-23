import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Header from "components/Header";

import { useNavigate, useParams } from "react-router-dom";

function FormDetails({ title }) {
  const navigate = useNavigate();
  const { formName } = useParams();

  const onClickLiveForm = () => {
    if (formName === "sola1") {
      navigate("/liveForm/sola1");
    } else if (formName === "sola2") {
      navigate("/liveForm/sola2");
    } else if (formName === "sola3") {
      navigate("/liveForm/sola3");
    } else if (!formName) {
      navigate("/forms");
    }
  };

  const onClickAnswers = () => {
    if (formName === "sola1") {
      navigate("/answers/sola1");
    } else if (formName === "sola2") {
      navigate("/answers/sola2");
    } else if (formName === "sola3") {
      navigate("/answers/sola3");
    } else if (!formName) {
      navigate("/forms");
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Header title={title} />
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
