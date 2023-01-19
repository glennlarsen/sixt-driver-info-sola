import React, { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Container from "components/Container";
import Header from "components/Header";
import Head from "components/Head";
import DriverInformation from "components/forms/DriverInformation";
import DriverInformation2 from "components/forms/DriverInformation2";
import DriverInformation3 from "components/forms/DriverInformation3";
import { content } from "constants/DriverFormContent";
import { LangContext } from "utils/LangContext";
import LanguageSelector from "components/common/LanguageSelector";

function LiveForm() {
  const { formName } = useParams();
  const navigate = useNavigate();
  const [lang] = useContext(LangContext);

  useEffect(() => {
    if (!formName) {
      navigate("/forms");
    }
  }, []);

  return (
    <Container>
      <Head
        page="Liveform"
        description="Driver information form for clients to fill"
      />
      <LanguageSelector />
      <Header title={content[lang]["heading"]} info={formName} />
      {formName === "sola1" && <DriverInformation />}
      {formName === "sola2" && <DriverInformation2 />}
      {formName === "sola3" && <DriverInformation3 />}
    </Container>
  );
}

export default LiveForm;
