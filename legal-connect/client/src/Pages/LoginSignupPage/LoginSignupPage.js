import './LoginSignupPage.css';

const LoginSignupPage = () => {
    return ( 
        <div className="login-signup-page">
            <h2>Login/Signup</h2>
            <div className="container login-signup-form">
                <form>
                    <div className="form-group">

                        <label for="login-email">Email address</label>
                        <input type="email" className="form-control" id="login-email" aria-describedby="emailHelp" placeholder="Enter email" />

                        <label for="login-password">Password</label>
                        <input type="password" className="form-control" id="login-password" placeholder="Password" />

                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default LoginSignupPage;