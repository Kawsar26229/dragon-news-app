import { useContext, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [acc, setAcc] = useState(false)
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((userCredential) => {
        updateUser(name, photoURL)
        .then(() => {
            console.log('Profile Updated');
        })
        .catch(error => {
            console.log('Profile updated failed', error);
        })
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("User Created Unsuccessful", error);
      });
  };

  const handleAccepted = (event) => {
    setAcc(event.target.checked);
  } 

  return (
    <Container className="mt-5">
      <Form
        onSubmit={handleRegister}
        className="w-50 mx-auto bg-light p-5 rounded"
      >
        <h3 className="text-center">Register your account</h3>
        <hr className="text-secondary" />
        <Form.Group className="mb-4 mt-5" controlId="name">
          <Form.Label className="fw-semibold">Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="photoURL">
          <Form.Label className="fw-semibold">Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photoURL"
            placeholder="Enter your photo URL"
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupEmail">
          <Form.Label className="fw-semibold">Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupPassword">
          <Form.Label className="fw-semibold">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" onClick={handleAccepted} name="checkbox" label="Accept Terms and Conditions" />
      </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control
            type="submit"
            value="Register"
            disabled={!acc}
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
