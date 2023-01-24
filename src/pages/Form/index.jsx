import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "utils/AuthContext";

import Container from "components/Container";
import Head from "components/Head";
import Layout from "components/Layout";
import FormDetails from "components/FormDetails";
import {
  SOLA_1,
  SOLA_2,
  SOLA_3,
  SOLA_1_TITLE,
  SOLA_2_TITLE,
  SOLA_3_TITLE,
  UKNOWN_FORM,
} from "constants/staticInfo";

function Form() {
  const { formName } = useParams();
  const [auth] = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
    if (!formName) {
      navigate("/forms");
    }
  }, []);

  let title = UKNOWN_FORM;
  switch (formName) {
    case SOLA_1:
      title = SOLA_1_TITLE;
      break;
    case SOLA_2:
      title = SOLA_2_TITLE;
      break;
    case SOLA_3:
      title = SOLA_3_TITLE;
      break;
    default:
      title = UKNOWN_FORM;
  }

  return (
    <Container>
      <Head
        page="Form"
        description="Choose what action you want to perform on this form"
      />
      <Layout backPage="forms" info={formName}>
        <FormDetails title={title} />
      </Layout>
    </Container>
  );
}

export default Form;
