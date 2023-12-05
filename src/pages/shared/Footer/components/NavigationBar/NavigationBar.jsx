import { Container, Image, Nav, Navbar } from "react-bootstrap";
import user from "../../../../../assets/user.png";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Container>
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
            <Link to='/login' className="btn btn-dark">Login</Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
