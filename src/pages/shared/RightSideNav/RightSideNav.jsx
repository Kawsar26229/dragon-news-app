import { ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import QZone from "../Footer/components/QZone/QZone";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const RightSideNav = () => {
  const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const handleGithubLogin = () => {
    signInWithGithub()
    .then((result) => {
      const user = result.user;
      console.log('User Sign In successful with Github', user);
    })
  };
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log("User SignIn successful with Google.", user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h5 className="fw-semibold">Login With</h5>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline-secondary mb-2 w-100"
      >
        <FaGithub /> Login With Google
      </button>
      <button
        onClick={handleGithubLogin}
        className="btn btn-outline-primary w-100"
      >
        <FaGoogle /> Login With Github
      </button>
      <h5 className="mt-4 mb-2">Find Us On</h5>
      <ListGroup>
        <ListGroup.Item className="py-4">
          <FaFacebook /> Facebook
        </ListGroup.Item>
        <ListGroup.Item className="py-4">
          <FaTwitter /> Twitter
        </ListGroup.Item>
        <ListGroup.Item className="py-4">
          <FaInstagram /> Instagram
        </ListGroup.Item>
      </ListGroup>
      <QZone></QZone>
    </div>
  );
};

export default RightSideNav;
