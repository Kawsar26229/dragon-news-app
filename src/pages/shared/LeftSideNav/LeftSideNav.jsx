import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './LeftSideNav.css'
import NewsCard from "../Footer/components/NewsCard/NewsCard";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/categories')
        .then((response) => {
            const data = response.data
            setCategories(data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <div>
            <h4 className="fw-semibold">All Category</h4>
            <div>
                {
                    categories.map(category => <div key={category.id} className="m-0 py-3 ps-5 category_bg">
                        <Link to={`/category/${category.id}`} className="text-decoration-none fs-5 text-secondary category_text_hover">{category.name}</Link>
                    </div>)
                }
            </div>
            <NewsCard></NewsCard>
        </div>
    );
};

export default LeftSideNav;