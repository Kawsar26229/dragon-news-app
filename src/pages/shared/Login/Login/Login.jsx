import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="mt-5">
      <Form className="w-50 mx-auto bg-light p-5 rounded">
        <h3 className="text-center">Login your account</h3>
        <hr className="text-secondary" />
        <Form.Group className="mb-3 mt-5" controlId="formGroupEmail">
          <Form.Label className="fw-semibold">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label className="fw-semibold">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="submit"
            value="Login"
            className="btn btn-secondary"
          />
        </Form.Group>
        <p className="text-center">
          Don't Have an Account?{" "}
          <Link className="text-danger text-decoration-none" to="/register">
            Register
          </Link>
        </p>
      </Form>
    </Container>
  );
};

export default Login;
