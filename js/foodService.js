const loadMeals = (foodName) => {
  //let foodName = "potato";
  console.log("Category=", foodName);

  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    })
    .then((data) => showMeals(data.meals))
    .catch((error) => console.error("Fetch error:", error));
};

const showMeals = (meals) => {
  console.log(meals);
  let resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = "";
  meals.forEach((meal) => {
    let card = document.createElement("div");
    card.classList = "card bg-base-100  shadow-xl";
    card.innerHTML = `
        <figure>
        
          <img  src=${meal.strMealThumb} alt="Image of ${meal.strMeal}" />
        </figure>
        <div class="card-body">
          <h2 class="card-title line-clamp-1">${meal.strMeal}</h2>
          <p title="${meal.strInstructions}" >${meal.strInstructions.slice(
      0,
      100
    )}...</p>
          <div class="card-actions justify-center mt-5">
            <button class="btn btn-secondary">Order Now</button>
          </div>
        </div>
    `;
    resultContainer.appendChild(card);
  });
};
