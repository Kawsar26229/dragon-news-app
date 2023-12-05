/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import moment from "moment";
import { Card, Container, Image } from "react-bootstrap";
import { FaBookmark, FaEye, FaRegStar, FaShareNodes, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
const News = (props) => {
  const { news } = props;
  return (
    <Container className="mb-4">
      <Card className="text-center">
        <Card.Header>
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <Image src={news.author.img} style={{height: '35px'}} roundedCircle />
                    <div>
                        <p className="m-0 fw-semibold">{news.author.name}</p>
                        <p className="m-0 ms-1">{moment().format('LL')}</p>
                    </div>
                </div>
                <div>
                <FaBookmark className="fs-4 mt-2 me-2" />
                <FaShareNodes className="fs-4 mt-2" />
                </div>
            </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{news.title}</Card.Title>
          <img src={news.image_url} className="w-100 my-3" alt="" />
          <Card.Text>
            {news.details.length < 250 ? <>{news.details}</> : <>{news.details.slice(0,250)}... <Link className="text-danger text-decoration-none" to={`/news/${news._id}`}>Read More</Link></>}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between">
        <div className="fw-semibold">
          <Rating
            placeholderRating={news.rating.number}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          ></Rating>
          <span className="ms-2">{news.rating?.number}</span>
        </div>
        <div className="fw-semibold">
          <FaEye /> {news.total_view}
        </div>
      </Card.Footer>
      </Card>
    </Container>
  );
};

export default News;
