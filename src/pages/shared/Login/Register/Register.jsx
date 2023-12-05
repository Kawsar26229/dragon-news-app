import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container className="mt-5">
      <Form className="w-50 mx-auto bg-light p-5 rounded">
        <h3 className="text-center">Register your account</h3>
        <hr className="text-secondary" />
        <Form.Group className="mb-4 mt-5" controlId="name">
          <Form.Label className="fw-semibold">Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="photoURL">
          <Form.Label className="fw-semibold">Photo URL</Form.Label>
          <Form.Control type="text" placeholder="Enter your photo URL" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupEmail">
          <Form.Label className="fw-semibold">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupPassword">
          <Form.Label className="fw-semibold">Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control
            type="submit"
            value="Register"
            className="btn btn-secondary"
          />
        </Form.Group>
        <p className="text-center">
          Already Have an Account?{" "}
          <Link className="text-danger text-decoration-none" to="/login">
            Login
          </Link>
        </p>
      </Form>
    </Container>
  );
};

export default Register;
