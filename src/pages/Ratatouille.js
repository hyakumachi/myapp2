import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./ratatouille.css";

function Ratatouille() {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    Axios.get("http://localhost:3001/ratatouille", { withCredentials: true })
      .then((res) => {
        console.log(res.data.meals[0]);
        setRecipe(res.data.meals[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure} ${ingredient}`.trim());
      }
    }
    return ingredients;
  };
  return (
    <div className="ratatouille-container">
      <div className="recipe-header">
        <h1 className="recipe-title">{recipe.strMeal}</h1>
        <div className="recipe-meta">
          <span className="category">Category: {recipe.strCategory}</span>
          <span className="area">Cuisine: {recipe.strArea}</span>
        </div>
      </div>

      <div className="recipe-content">
        <div className="recipe-image-section">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="recipe-image"
          />

          {recipe.strTags && (
            <div className="tags-section">
              <h4>Tags:</h4>
              <div className="tags">
                {recipe.strTags.split(",").map((tag, index) => (
                  <span key={index} className="tag">
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="links-section">
            {recipe.strYoutube && (
              <a
                href={recipe.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-btn"
              >
                Watch on YouTube
              </a>
            )}

            {recipe.strSource && (
              <a
                href={recipe.strSource}
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                Original Recipe Source
              </a>
            )}
          </div>
        </div>

        <div className="recipe-details">
          <div className="ingredients-section">
            <h3>Ingredients:</h3>
            <ul className="ingredients-list">
              {getIngredients().map((ingredient, index) => (
                <li key={index} className="ingredient-item">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="instructions-section">
            <h3>Instructions:</h3>
            <div className="instructions-text">{recipe.strInstructions}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ratatouille;
