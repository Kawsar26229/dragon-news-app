import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/shared/Footer/Footer";
import Header from "../pages/shared/Header/Header";
import LeftSideNav from "../pages/shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../pages/shared/RightSideNav/RightSideNav";
import '../layout/Main.css';
import NavigationBar from "../pages/shared/Footer/components/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg={6}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
