// src/main.js
import { getAllRecipes } from './api/recipeProvider.js';
import { renderRecipes } from './ui/render.js';

async function init() {
    const loader = document.getElementById('loader');
    
    // 1. Werri l-loader (US2)
    loader.classList.remove('hidden');

    // 2. Jib l-data
    const recipes = await getAllRecipes();

    // 3. Khbi l-loader
    loader.classList.add('hidden');

    // 4. Affichi l-makla
    renderRecipes(recipes);
}

init();