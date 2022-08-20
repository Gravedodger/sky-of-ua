import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginForm from "../../components/LoginForm";

const LoginPage = () => {
  const isAuthenticated = useSelector( state => state.auth.is_authenticated )
  const history = useHistory();
    
  if (isAuthenticated) {
    history.goBack();
  }

  return (
    <div>
      <h2>Login Form</h2>
      <LoginForm />
    </div>
  )
}

export default LoginPage;
