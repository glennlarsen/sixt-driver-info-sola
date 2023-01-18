import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "utils/AuthContext";

import Container from "components/Container";
import Header from "components/Header";
import LoginForm from "components/forms/LoginForm";
import Head from "components/Head";

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
      <Header title="Login" info="Driver Info Forms" />
      <LoginForm />
    </Container>
  );
}

export default Login;
