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
grid.addEventListener('click', (e) => {
    const card = e.target.closest('.recipe-card');
    if (card) {
        const recipeId = card.dataset.id; // T-akked mn render.js
        const recipe = allRecipes.find(r => r.id == parseInt(recipeId));
        if (recipe) {
            showRecipeDetails(recipe);
        }
    }
});

// 2. Listener dyal l-Accordion (Ingredient/Preparation)
document.addEventListener('click', (e) => {
    const header = e.target.closest('.accordion-header');
    if (header) {
        const section = header.parentElement;
        section.classList.toggle('open');
        
        // Beddel l-s-ham (bach t-ban interactive)
        const span = header.querySelector('span');
        if (span) {
            span.textContent = section.classList.contains('open') ? '▲' : '▼';
        }
    }
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