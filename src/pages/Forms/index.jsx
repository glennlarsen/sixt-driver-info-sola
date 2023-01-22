import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "utils/AuthContext";

import Container from "components/Container";
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
      <Layout showBackButton="none" info="Driver Info Forms">
        <FormsForm title="Forms" />
      </Layout>
    </Container>
  );
};

export default Forms;
