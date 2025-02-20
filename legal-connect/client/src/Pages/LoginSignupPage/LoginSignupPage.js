import './LoginSignupPage.css';
import { SignIn } from "@clerk/clerk-react";

const LoginSignupPage = () => {

  return <div className="login-signup-form"><SignIn/></div>;
};

export default LoginSignupPage;
