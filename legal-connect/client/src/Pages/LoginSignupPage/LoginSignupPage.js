import React, { useEffect } from "react";
import './LoginSignupPage.css';

const LoginSignupPage = () => {

  useEffect(() => {
    window.location.href = "https://primary-hagfish-6.accounts.dev/sign-in";
  }, []);

  return <p>Redirecting to login...</p>;
};

export default LoginSignupPage;
