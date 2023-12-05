import moment from "moment/moment";
import logo from "../../../assets/logo.png";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import user from "../../../assets/user.png";

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
        <Marquee>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      <Navbar expand="lg" className="mt-4">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 my-lg-0 mx-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Career</Nav.Link>
            </Nav>
            <Image
              src={user}
              roundedCircle
              style={{ height: "35px", marginRight: "0.5rem" }}
            />
            <Button className="btn btn-dark">Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
