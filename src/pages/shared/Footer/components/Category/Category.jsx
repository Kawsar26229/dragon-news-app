import { useLoaderData } from "react-router-dom";
import News from "../News/News";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      <h4 className="fw-semibold">Total News: {categoryNews.length}</h4>
      {categoryNews.map((news) => (
        <News key={news._id} news={news}></News>
      ))}
    </div>
  );
};

export default Category;
