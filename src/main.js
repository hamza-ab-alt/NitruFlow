// src/main.js
import { getAllRecipes } from './api/recipeProvider.js';
import { renderRecipes } from './ui/render.js';

let allRecipes = []; // Hna ghadi n-khbiw l-data l-asliya

async function init() {
    const loader = document.getElementById('loader');
    const searchInput = document.getElementById('search-input'); // L-input dyal l-search

    loader.classList.remove('hidden');
    allRecipes = await getAllRecipes(); // Jib l-data o khbiha f l-variable
    loader.classList.add('hidden');

    renderRecipes(allRecipes); // Affichi kolchi f l-bdya

    // Event Listener dyal l-recherche (US3)
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        // Filter l-wasafat li fihom dak l-ism
        const filtered = allRecipes.filter(recipe => 
            recipe.name.toLowerCase().includes(searchTerm)
        );

        renderRecipes(filtered); // Re-render ghir l-filtered data
    });
}

init();