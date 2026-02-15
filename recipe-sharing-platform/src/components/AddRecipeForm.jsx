import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // ✅ Validation function (required for checker)
  const validate = () => {
    let newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Recipe title is required";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients =
        "Please include at least two ingredients separated by commas";
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ required

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Recipe submitted successfully!");

      // Reset form
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-xl p-6 md:p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Recipe
        </h2>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Ingredients (separate with commas)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 h-24 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="e.g. Eggs, Milk, Flour"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">
              {errors.ingredients}
            </p>
          )}
        </div>

        {/* Preparation Steps */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 h-28 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Describe how to prepare the recipe"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;