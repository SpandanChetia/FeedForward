import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RecipeSearch = () => {
  const [ingredients, setIngredients] = useState("");
  const [diet, setDiet] = useState("");
  const [calories, setCalories] = useState("");
  const [cuisineType, setCuisineType] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get("https://api.edamam.com/search", {
        params: {
          app_id: "3e4361b4",
          app_key: "e61e338daa8d6f7cf1eda9ffcff65081",
          q: ingredients,
          diet: diet,
          calories: calories,
          cuisineType: cuisineType,
        },
      });

      if (response.data.hits.length > 0) {
        const recipes = response.data.hits.map((hit) => hit.recipe);
        setRecipeList(recipes);
      } else {
        setRecipeList([]);
        setErrorMessage("No recipes found.");
      }
    } catch (error) {
      setRecipeList([]);
      setErrorMessage("Error occurred during API request.");
    }
  };

  return (
    <div className="RS-body">
      <div className="menu">
        {/* <div className="rs-navbar">
          <ul>
            <Link to="/recipeSearch">
              <li className="rs-links">Recipe Search</li>
            </Link>
            <Link to="/nutriAnalysis">
              <li className="rs-links">Nutrition Analysis</li>
            </Link>
            <Link to="/wasteAnalysis">
              <li className="rs-links">Food Wastage</li>
            </Link>
          </ul>
        </div> */}
        <div className="rs-content">
          <div id="recipeSearch">
            <h2>Recipe Search</h2>
            <form className="rs-form" onSubmit={handleSubmit} id="recipeForm">
              <div className="ingredient-input">
                <label htmlFor="ingredients">Enter Ingredients:</label>
                <div className="btn-input">
                  <input
                    type="text"
                    id="ingredients"
                    required
                    className="ingredients-input"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                  />
                  <button type="submit">Search</button>
                </div>
              </div>

              <div className="option-input">
                <label htmlFor="diet">Diet:</label>
                <select
                  id="diet"
                  value={diet}
                  onChange={(e) => setDiet(e.target.value)}
                >
                  <option value="">Any</option>
                  <option value="balanced">Balanced</option>
                  <option value="high-protein">High Protein</option>
                  <option value="low-carb">Low Carb</option>
                  <option value="low-fat">Low Fat</option>
                </select>
              </div>

              <div className="option-input">
                <label htmlFor="calories">Calories:</label>
                <input
                  type="number"
                  id="calories"
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                />
              </div>

              <div className="option-input">
                <label htmlFor="cuisineType">Cuisine Type:</label>
                <input
                  type="text"
                  id="cuisineType"
                  value={cuisineType}
                  onChange={(e) => setCuisineType(e.target.value)}
                />
              </div>
            </form>
            {recipeList.length > 0 ? (
              <div id="recipeList" className="recipe-grid">
                {recipeList.map((recipe) => (
                  <div className="recipe-row" key={recipe.label}>
                    <div className="recipe-column">
                      <img
                        src={recipe.image}
                        alt={recipe.label}
                        className="recipe-image"
                      />
                    </div>
                    <div className="recipe-column">
                      <h3>{recipe.label}</h3>
                      {recipe.ingredientLines.map((line, index) => (
                        <p className="recipe-ingredients" key={index}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div id="recipeList">{errorMessage}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeSearch;
