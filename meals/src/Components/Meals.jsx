import { useState, useEffect } from "react";
import "../styles.css";
const BASE_URL = "https://www.themealdb.com/api/json/v1/1";
const Meals = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const getCategories = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/categories.php`);
        if (!response.ok) {
          throw new Error(`Http error! status:${response.status}`);
        }
        const { categories } = await response.json();
        setCategories(categories);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCategories();
  }, []);

  return (
    <div className="container">
      <h1>Meals</h1>
      {isLoading ? (
        <span className="loader"></span>
      ) : error ? (
        <h2>Some Error occured</h2>
      ) : (
        <ul>
          {categories.map((category) => (
            <li key={category.idCategory}>
              <img src={category.strCategoryThumb} alt={category.strCategory} />
              <p>{category.strCategory}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Meals;
