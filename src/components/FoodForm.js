import React, {useState, useRef} from 'react' 

export default function FoodForm({calories, setCalories}) {
    const desc = useRef(null);
    const servingSize = useRef(null);
    const mealType = useRef(null);
    // const mealType = useRef(null);

    const AddFood = e => {
        e.preventDefault();

        setCalories([...calories, {
            "desc": desc.current.value,
            "servingSize": servingSize.current.value,
            "mealType": mealType.current.value
        }]);

        desc.current.value = "";
        servingSize.current.value = null;
        // mealType.current.value = null;
    }


    return (
        <form className="calories-form" onSubmit={AddFood}>
            <div className="form-inner">
                <input type="text" name="desc" id="desc" placeholder="Enter food" ref={desc}/>
                <input type="number" name="servingSize" placeholder="Enter serving size" ref={servingSize}/>
                <select className="mealType" ref={mealType}>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Snack">Snack</option>
                </select>
                
                <input type="submit" value="Add food"/>
            </div>
        </form>
    )
}

//onChange={(e)=>{
//     const selectedMeal = e.target.value;
//     setmealType(selectedMeal)
// }}