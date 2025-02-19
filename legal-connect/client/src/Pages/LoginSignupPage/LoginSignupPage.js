import React, { useEffect } from "react";
import { SignIn, SignUp, useAuth } from "@clerk/clerk-react";
import { useNavigate, useLocation } from "react-router-dom";
import './LoginSignupPage.css';

const LoginSignupPage = () => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/home"); // Redirect to home if already signed in
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="container login-signup-form">
      {location.pathname === "/login" ? (
        <SignIn routing="path" afterSignInRedirectUrl="/home" />
      ) : (
        <SignUp routing="path" afterSignUpRedirectUrl="/home" />
      )}
    </div>
  );
};

export default LoginSignupPage;