import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "utils/AuthContext";

import Container from "components/Container";
import Head from "components/Head";
import FormsForm from "components/forms/FormsForm";
import Layout from "components/Layout/index";
import { DRIVER_INFO_FORMS } from "constants/staticInfo";

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
      <Layout showBackButton="none" info={DRIVER_INFO_FORMS}>
        <FormsForm title="Forms" />
      </Layout>
    </Container>
  );
};

export default Forms;
