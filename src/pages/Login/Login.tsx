import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      Login No account? <Link to={'/register'}>Register</Link>
    </div>
  );
}

export default Login;
