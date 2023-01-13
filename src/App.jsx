import "./sass/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BASE_URL, DRIVERFORM1 } from "constants/apiKeys";
import useApi from "utils/useApi";

import Answers from "pages/Answers";
import Forms from "pages/Forms";
import Form from "pages/Form";
import LiveForm from "pages/LiveForm";
import Login from "pages/Login";
import HowItWorks from "pages/HowItWorks";

const App = () => {
  const url = BASE_URL + DRIVERFORM1;
  const { answers } = useApi(url);
  console.log(answers);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/form" element={<Form />} />
        {["/form", "/form/:formName"].map((path, index) => {
          return <Route path={path} element={<Form />} key={index} />;
        })}
        {["/liveform", "/liveform/:formName"].map((path, index) => {
          return <Route path={path} element={<LiveForm />} key={index} />;
        })}
        {["/answers", "/answers/:formName"].map((path, index) => {
          return <Route path={path} element={<Answers />} key={index} />;
        })}
      </Routes>
    </Router>
  );
};

export default App;
