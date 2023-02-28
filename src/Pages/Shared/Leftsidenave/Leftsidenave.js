import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./side.css";

const Leftsidenave = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      <h5>Category List: {category.length}</h5>
      {category.map((cat) => (
        <p id="category-header">
          <Link id="cat-sumery" to={`/categories/${cat.id}`}>
            {cat.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default Leftsidenave;
