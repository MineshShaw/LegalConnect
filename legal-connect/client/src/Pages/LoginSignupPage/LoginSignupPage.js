import './LoginSignupPage.css';

function handleLogin(e) {
    e.preventDefault();

    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;

    if (!(email && password)) {
        console.log('Please enter email and password');
        return;
    }

    fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

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

                        <button type="submit" className="btn" onClick={handleLogin}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default LoginSignupPage;