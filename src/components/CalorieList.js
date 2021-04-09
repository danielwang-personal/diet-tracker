import React from 'react'
import CalorieItem from './CalorieItem';

export default function CalorieList({ calories, setCalories }) {

    const removeCalories = i => {
        let temp = calories.filter((v, index) => index != i);
        setCalories(temp);
    }

    const sortByDate = (a, b) => {
        return a.date - b.date;
    }

    return (
        <div className="calories-list">
            {
                calories.sort(sortByDate).map((value, index) => (
                    <CalorieItem 
                        key={index} 
                        calories={value}
                        index={index}
                        removeCalories={removeCalories}
                    />
                ))
            }
        </div>
    )
}
