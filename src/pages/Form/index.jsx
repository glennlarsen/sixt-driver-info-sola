import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "utils/AuthContext";

import Container from "components/Container";
import Header from "components/Header";
import Head from "components/Head";
import Layout from "components/Layout";
import FormDetails from "components/FormDetails";

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

  return (
    <Container>
      <Head
        page="Form"
        description="Choose what action you want to perform on this form"
      />
      <Header title={formName} flex={2} />
      <Layout backPage="forms">
        <FormDetails />
      </Layout>
    </Container>
  );
}

export default Form;
