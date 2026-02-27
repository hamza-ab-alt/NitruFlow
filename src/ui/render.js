// src/ui/render.js

export function renderRecipes(recipes) {
  const grid = document.getElementById("recipe-grid");
  grid.innerHTML = ""; // N-msf-hou l-grid qbel ma n-3mrouh

  recipes.forEach((recipe) => {
    // Hna ghadi n-qerrero lon l-badge 3la hssab calories (US4)
    let badgeColor = "green";
    if (recipe.caloriesPerServing > 800) badgeColor = "red";
    else if (recipe.caloriesPerServing >= 400) badgeColor = "orange";

    // L-HTML dyal l-card bhal design dyalk
    // f src/ui/render.js
    grid.innerHTML += `
    <div class="recipe-card" data-id="${recipe.id}">  <img src="${recipe.image}" alt="${recipe.name}">
        <div class="card-info">
            <h3>${recipe.name}</h3>
            <span class="calories-badge" style="background-color: ${badgeColor}">
                ${recipe.caloriesPerServing} Kcal
            </span>
        </div>
        <button class="fav-btn">❤️</button>
    </div>
`;
  });
}
export function showRecipeDetails(recipe) {
  const modal = document.getElementById("recipe-modal");
  const modalBody = document.getElementById("modal-body");

  modalBody.innerHTML = `
        <div class="detail-header">
            <img src="${recipe.image}" class="main-img">
            <div class="info-overlay">
                <h2>${recipe.name}</h2>
                <p>${recipe.ingredients.length} ingredients</p>
                <div class="stats">
                    <span>⏱ ${recipe.prepTimeMinutes} Min</span>
                    <span>🔥 ${recipe.caloriesPerServing} Kcal</span>
                </div>
            </div>
        </div>

        <div class="accordion-section">
            <div class="accordion-header">
                <h3>Ingredient</h3>
                <span>▼</span>
            </div>
            <div class="accordion-content">
                <ul>${recipe.ingredients.map((ing) => `<li>${ing}</li>`).join("")}</ul>
            </div>
        </div>

        <div class="accordion-section">
            <div class="accordion-header">
                <h3>Preparation</h3>
                <span>▼</span>
            </div>
            <div class="accordion-content">
                <ol>${recipe.instructions.map((ins) => `<li>${ins}</li>`).join("")}</ol>
            </div>
        </div>
    `;

  modal.classList.remove("hidden");
}
