import { ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import QZone from "../Footer/components/QZone/QZone";

const RightSideNav = () => {
  return (
    <div>
      <h5 className="fw-semibold">Login With</h5>
      <button className="btn btn-outline-primary mb-2 w-100">
      <FaGoogle /> Login With Github
      </button>
      <button className="btn btn-outline-secondary w-100">
      <FaGithub /> Login With Google
      </button>
      <h5 className="mt-4 mb-2">Find Us On</h5>
      <ListGroup>
        <ListGroup.Item className="py-4"><FaFacebook /> Facebook</ListGroup.Item>
        <ListGroup.Item className="py-4"><FaTwitter /> Twitter</ListGroup.Item>
        <ListGroup.Item className="py-4"><FaInstagram /> Instagram</ListGroup.Item>
      </ListGroup>
      <QZone></QZone>
    </div>
  );
};

export default RightSideNav;
