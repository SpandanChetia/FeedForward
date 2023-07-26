import React, { useState } from 'react';

const NutritionAnalysis=()=> {
  const [ingredients, setIngredients] = useState('');
  const [resultHtml, setResultHtml] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const analyzeNutrition = () => {
    if (!ingredients) {
      setErrorMessage('Please enter ingredients.');
      return;
    }

    fetch(
      `https://api.edamam.com/api/nutrition-data?app_id=100fcc68&app_key=c9f82907b76776cdab2cb96c7a8fa2b6&ingr=${ingredients}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.totalNutrients) {
          const nutrients = data.totalNutrients;
          let resultHtml = '<h2>Nutrition Facts</h2>';
          resultHtml += '<table>';
          resultHtml += '<tr><th>Amount Per Serving</th></tr>';
          resultHtml += `<tr><td>Calories</td><td>${nutrients.ENERC_KCAL.quantity.toFixed(
            2
          )} ${nutrients.ENERC_KCAL.unit}</td></tr>`;
          resultHtml += `<tr><td>Total Fat</td><td>${nutrients.FAT.quantity.toFixed(
            2
          )} ${nutrients.FAT.unit}</td></tr>`;
          resultHtml += `<tr><td>Saturated Fat</td><td>${nutrients.FASAT.quantity.toFixed(
            2
          )} ${nutrients.FASAT.unit}</td></tr>`;
          resultHtml += `<tr><td>Trans Fat</td><td>${nutrients.FATRN.quantity.toFixed(
            2
          )} ${nutrients.FATRN.unit}</td></tr>`;
          resultHtml += `<tr><td>Cholesterol</td><td>${nutrients.CHOLE.quantity.toFixed(
            2
          )} ${nutrients.CHOLE.unit}</td></tr>`;
          resultHtml += `<tr><td>Sodium</td><td>${nutrients.NA.quantity.toFixed(
            2
          )} ${nutrients.NA.unit}</td></tr>`;
          resultHtml += `<tr><td>Total Carbohydrate</td><td>${nutrients.CHOCDF.quantity.toFixed(
            2
          )} ${nutrients.CHOCDF.unit}</td></tr>`;
          resultHtml += `<tr><td>Dietary Fiber</td><td>${nutrients.FIBTG.quantity.toFixed(
            2
          )} ${nutrients.FIBTG.unit}</td></tr>`;
          resultHtml += `<tr><td>Total Sugars</td><td>${nutrients.SUGAR.quantity.toFixed(
            2
          )} ${nutrients.SUGAR.unit}</td></tr>`;
          resultHtml += `<tr><td>Protein</td><td>${nutrients.PROCNT.quantity.toFixed(
            2
          )} ${nutrients.PROCNT.unit}</td></tr>`;
          resultHtml += `<tr><td>Vitamin D</td><td>${nutrients.VITD.quantity.toFixed(
            2
          )} ${nutrients.VITD.unit}</td></tr>`;
          resultHtml += `<tr><td>Calcium</td><td>${nutrients.CA.quantity.toFixed(
            2
          )} ${nutrients.CA.unit}</td></tr>`;
          resultHtml += `<tr><td>Iron</td><td>${nutrients.FE.quantity.toFixed(
            2
          )} ${nutrients.FE.unit}</td></tr>`;
          resultHtml += `<tr><td>Potassium</td><td>${nutrients.K.quantity.toFixed(
            2
          )} ${nutrients.K.unit}</td></tr>`;
          resultHtml += '</table>';

          setResultHtml(resultHtml);
          setErrorMessage('');
        } else {
          setResultHtml('');
          setErrorMessage('Unable to retrieve nutrition information.');
        }
      })
      .catch(() => {
        setResultHtml('');
        setErrorMessage('Error occurred during API request.');
      });
  };

  return (
    <div className='nutritionAnalysis-body'>
    <div className="nutrition-content">
      <h2>Nutrition Analysis</h2>
      <div className="input-container">
        <label htmlFor="ingredients">Enter Ingredients:</label>
        <textarea
          id="ingredients"
          rows="5"
          cols="80"
          placeholder="Enter ingredients with quantities (e.g., 1 cup of flour, 2 eggs, 200g sugar)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
      </div>
      <button id="nutri-analyze" onClick={analyzeNutrition}>
        Analyze
      </button>
      <div className="result-container">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {resultHtml && <div dangerouslySetInnerHTML={{ __html: resultHtml }} />}
      </div>
    </div>
    </div>
    
  );
}

export default NutritionAnalysis;
