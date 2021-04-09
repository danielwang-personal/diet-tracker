import React from 'react';

export default function Header({totalCalories}) {
    return (
        <header>
            <h1>Calorie Tracker</h1>
            <div className="total-calories">{totalCalories}</div>
        </header>
    )
}
