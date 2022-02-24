import React from 'react';
import RecipeBody from './RecipeBody';
import './Recipe.css';

function RecipeTitle() {
    const title = 'Tacos';
    return (
        <div className='recipe-div'>
            <h2>{ title }</h2>
            <RecipeBody />
        </div>
    )
};
export default RecipeTitle;