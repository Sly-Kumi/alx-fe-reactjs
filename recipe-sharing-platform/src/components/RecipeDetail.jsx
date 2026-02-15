import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import recipesData from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipesData.find(
      (recipe) => recipe.id === parseInt(id)
    );
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10 text-gray-600">Recipe not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full rounded-lg shadow-lg mb-6"
      />

      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {recipe.title}
      </h1>

      <p className="text-gray-600 mb-6">
        {recipe.summary}
      </p>

      <div className="bg-gray-100 p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700">
          {recipe.ingredients?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <p className="text-gray-700 whitespace-pre-line">
          {recipe.instructions}
        </p>
      </div>
    </div>
  );
}

export default RecipeDetail;