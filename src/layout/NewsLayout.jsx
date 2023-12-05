import { Col, Container, Row } from "react-bootstrap";
import Header from "../pages/shared/Header/Header";
import { Outlet } from "react-router-dom";
import RightSideNav from "../pages/shared/RightSideNav/RightSideNav";
import Footer from "../pages/shared/Footer/Footer";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={9}>
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

export default NewsLayout;
