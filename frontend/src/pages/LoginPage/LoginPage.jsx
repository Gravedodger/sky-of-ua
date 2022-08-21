import React from "react";
import { unstable_HistoryRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginForm from "../../client/auth/components/LoginForm";

const LoginPage = () => {
  const isAuthenticated = useSelector( state => state.auth.is_authenticated )
  let history = unstable_HistoryRouter();

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
