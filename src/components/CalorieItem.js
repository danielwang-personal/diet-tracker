import React from 'react';

export default function CalorieItem({ calories, index, removeCalories }) {
    let date = new Date(calories.date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const removeHandle = i => {
        removeCalories(i);
    }
    return (
        <div className="calories-item">
            <button className="remove-item" onClick={() => removeHandle(index)}>x</button>
            <div className="desc">{calories.desc}</div>
            <div className="calorieNo">{calories.calorieNo}</div>
            <div className="date">{day + "/" + month + "/" + year}</div>
        </div>
    )
}
