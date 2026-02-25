// src/api/recipeProvider.js
const API_URL = 'https://dummyjson.com/recipes';

export async function getAllRecipes() {
    try {
        const response = await fetch(API_URL); // Request
        if (!response.ok) throw new Error('Erreur de connexion');
        
        const data = await response.json(); // Conversion JSON
        return data.recipes; 
    } catch (error) {
        console.error("Mouchkil:", error);
        return [];
    }
}