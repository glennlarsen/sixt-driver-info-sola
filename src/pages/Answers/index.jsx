import React from "react";
import { useParams } from "react-router-dom";

import Container from "components/Container";
import Header from "components/Header";
import Head from "components/Head";
import Layout from "components/Layout";
import AnswersForm from "components/forms/AnswersForm";
import AnswersForm2 from "components/forms/AnswersForm2";
import AnswersForm3 from "components/forms/AnswersForm3";

function Answers() {
  const { formName } = useParams();

  console.log(formName);

  return (
    <Container>
      <Head
        page="Answers"
        description="Showing answers that the client provides to the form"
      />
      <Header title="Answers" flex={2} info={formName} />
      <Layout backPage={`form/${formName}`}>
        {formName === "flesland1" && <AnswersForm />}
        {formName === "flesland2" && <AnswersForm2 />}
        {formName === "flesland3" && <AnswersForm3 />}
      </Layout>
    </Container>
  );
}

export default Answers;
