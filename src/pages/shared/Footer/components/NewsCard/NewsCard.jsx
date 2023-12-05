import { Card } from "react-bootstrap";
import newsCard1 from "../../../../../assets/1.png";
import newsCard2 from "../../../../../assets/2.png";
import newsCard3 from "../../../../../assets/3.png";
import { FaBox } from "react-icons/fa6";
import moment from "moment";

const NewsCard = () => {
  return (
    <div className="mt-4">
      <Card className="mb-3">
        <Card.Img variant="top" src={newsCard1} />
        <Card.Body>
          <Card.Title>
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between">
              <p>Sports</p>
              <div className="d-flex">
                <FaBox />
                <p className="ms-2">{moment().format('ll')}</p>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <Card.Img variant="top" src={newsCard2} />
        <Card.Body>
          <Card.Title>
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between">
              <p>Sports</p>
              <div className="d-flex">
                <FaBox />
                <p className="ms-2">{moment().format('ll')}</p>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <Card.Img variant="top" src={newsCard3} />
        <Card.Body>
          <Card.Title>
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between">
              <p>Sports</p>
              <div className="d-flex">
                <FaBox />
                <p className="ms-2">{moment().format('ll')}</p>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsCard;
