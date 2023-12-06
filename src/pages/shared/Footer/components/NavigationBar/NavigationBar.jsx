import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import userImg from "../../../../../assets/user.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../../provider/AuthProvider";
import Marquee from "react-fast-marquee";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLoggedOut = () => {
    logOut()
      .then((result) => {
        console.log("Logout successful", result);
      })
      .catch((error) => {
        console.log("Logout Not Success", error);
      });
  };
  return (
    <Container className="mb-4">
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
              <Link className="text-decoration-none text-dark me-2" to='/'>Home</Link>
              <Link className="text-decoration-none text-dark me-2" to='/about'>About</Link>
              <Link className="text-decoration-none text-dark me-2" to='/career'>Career</Link>
            </Nav>
            {user ? (
              <span className="me-2 fw-semibold">{user.displayName}</span>
            ) : (
              <Image
                src={userImg}
                roundedCircle
                style={{ height: "35px", marginRight: "0.5rem" }}
              />
            )}
            {user ? (
              <Button className="btn btn-dark" onClick={handleLoggedOut}>
                <Link to="/login" className="text-white text-decoration-none">
                  Logout
                </Link>
              </Button>
            ) : (
              <Link to="/login" className="btn btn-dark">
                Login
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
