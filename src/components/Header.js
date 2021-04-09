import React from 'react';

export default function Header({totalCalories}) {
    return (
        <header>
            <h1>Macro Visualiser</h1>
            <div className="total-calories">Total calories: {totalCalories}</div>
        </header>
    )
}
