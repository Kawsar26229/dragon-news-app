import moment from "moment/moment";
import logo from "../../../assets/logo.png";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container className="mb-4">
      <div className="text-center mt-4">
        <img src={logo} alt="Logo" />
        <p className="mt-2 mb-1 text-secondary">
          Journalism Without Fear or Favour
        </p>
        <p className="mt-0">{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex bg-light py-1 px-2 rounded">
        <button className="btn btn-danger">Latest</button>
        <Marquee>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
      </div>
    </Container>
  );
};

export default Header;
