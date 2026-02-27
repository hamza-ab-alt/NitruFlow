import { getAllRecipes } from './api/recipeProvider.js';
import { renderRecipes, showRecipeDetails } from './ui/render.js';

let allRecipes = [];

async function init() {
    const grid = document.getElementById('recipe-grid');
    const loader = document.getElementById('loader');

    try {
        loader.classList.remove('hidden');
        allRecipes = await getAllRecipes();
        loader.classList.add('hidden');

        // 1. Affichi les cards (Bach ma-i-mchiwch)
        renderRecipes(allRecipes);

       // 1. Listener bach t-hall l-page details

});

// 3. Listener dyal l-bouton Back (Bach t-sed l-modal)
document.addEventListener('click', (e) => {
    if (e.target.id === 'close-modal' || e.target.classList.contains('back-btn')) {
        const modal = document.getElementById('recipe-modal');
        modal.classList.add('hidden');
    }
});

    } catch (error) {
        console.error("Erreur f l-app:", error);
    }
}

init();