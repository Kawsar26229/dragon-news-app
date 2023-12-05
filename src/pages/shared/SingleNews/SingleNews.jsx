import { Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const SingleNews = () => {
  const {image_url, title, details, category_id} = useLoaderData();
  return (
    <div>
      <h4 className="fw-semibold mb-3">Dragon News</h4>
      <Card>
        <Card.Img className="p-4" variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Link to={`/category/${category_id}`} className="text-decoration-none btn btn-danger"><FaArrowLeft /> All News in this Category</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleNews;
