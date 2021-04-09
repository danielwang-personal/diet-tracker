import React from 'react'
import FoodItem from './FoodItem';

export default function FoodList({ calories, setCalories }) {

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
                    <FoodItem 
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
