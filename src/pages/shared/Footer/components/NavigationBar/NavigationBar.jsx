import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import userImg from "../../../../../assets/user.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../../provider/AuthProvider";

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
