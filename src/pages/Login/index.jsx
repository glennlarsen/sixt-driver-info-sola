import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "utils/AuthContext";

import Container from "components/Container";
import LoginForm from "components/forms/LoginForm";
import Head from "components/Head";
import Layout from "components/Layout";
import Logo from "components/Logo";
import { Mobile } from "components/common/ScreenViewSizes";

function Login() {
  const [auth] = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate("/forms");
    }
  }, []);

  return (
    <Container>
      <Head
        page="Login"
        description="Login to start using Sixt Driver info Forms"
      />
      <Layout info="Driver Info Forms" showSideBar="none">
        <Mobile>
          <Logo info="Driver Info Forms" />
        </Mobile>
        <LoginForm title="Login" info="Driver Info Forms" />
      </Layout>
    </Container>
  );
}

export default Login;
