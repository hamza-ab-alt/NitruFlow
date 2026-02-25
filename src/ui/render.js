// src/ui/render.js

export function renderRecipes(recipes) {
    const grid = document.getElementById('recipe-grid');
    grid.innerHTML = ''; // N-msf-hou l-grid qbel ma n-3mrouh

    recipes.forEach(recipe => {
        // Hna ghadi n-qerrero lon l-badge 3la hssab calories (US4)
        let badgeColor = 'green';
        if (recipe.caloriesPerServing > 800) badgeColor = 'red';
        else if (recipe.caloriesPerServing >= 400) badgeColor = 'orange';

        // L-HTML dyal l-card bhal design dyalk
        grid.innerHTML += `
            <div class="recipe-card">
                <img src="${recipe.image}" alt="${recipe.name}">
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