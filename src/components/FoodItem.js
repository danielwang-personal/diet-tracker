import React from 'react';

export default function FoodItem({ calories, index, removeCalories }) {

    const removeHandle = i => {
        removeCalories(i);
    }
    return (
        <div className="calories-item">
            <button className="remove-item" onClick={() => removeHandle(index)}>x</button>
            <div className="desc">{calories.desc}</div>
            <div className="servingSize">{calories.servingSize}</div>
            <div className="mealType">{calories.mealType}</div>
        </div>
    )
}
