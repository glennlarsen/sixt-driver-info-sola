import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "utils/AuthContext";

import Container from "components/Container";
import Header from "components/Header";
import Head from "components/Head";
import FormsForm from "components/forms/FormsForm";
import Layout from "components/Layout/index";

const Forms = () => {
  const [auth] = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, []);
  
  return (
    <Container>
      <Head
        page="Forms"
        description="Select a form that you want to use or create a new form"
      />
      <Header title="Forms" flex={2} />
      <Layout showBackButton="none">
        <FormsForm />
      </Layout>
    </Container>
  );
};

export default Forms;
