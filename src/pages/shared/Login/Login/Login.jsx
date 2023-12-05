import { useContext } from "react";
import { Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        loginUser(email, password)
        .then(userCredential => {
            navigate(from, { replace: true });
            const user = userCredential.user;
            console.log(user);
        })
        .catch(error => {
            console.log('User login unsuccessful', error);
        })
    }

  return (
    <Container className="mt-5">
      <Form onSubmit={handleLogin} className="w-50 mx-auto bg-light p-5 rounded">
        <h3 className="text-center">Login your account</h3>
        <hr className="text-secondary" />
        <Form.Group className="mb-3 mt-5" controlId="formGroupEmail">
          <Form.Label className="fw-semibold">Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label className="fw-semibold">Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="submit"
            value="Login"
            className="btn btn-secondary"
          />
        </Form.Group>
        <p className="text-center">
          Dont Have an Account?{" "}
          <Link className="text-danger text-decoration-none" to="/register">
            Register
          </Link>
        </p>
      </Form>
    </Container>
  );
};

export default Login;
