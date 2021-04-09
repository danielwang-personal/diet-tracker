import React, {useState, useRef} from 'react' 

export default function FoodForm({calories, setCalories}) {
    const desc = useRef(null);
    const date = useRef(null);
    const servingSize = useRef(null);
    const [mealType, setmealType] = useState("");
    // const mealType = useRef(null);

    const AddFood = e => {
        e.preventDefault();

        let d=date.current.value.split("-");
        let newD = new Date(d[0], d[1], d[2])

        setCalories([...calories, {
            "desc": desc.current.value,
            "servingSize": servingSize.current.value,
            "date": newD.getTime(),
            "mealType": mealType
        }]);

        desc.current.value = "";
        servingSize.current.value = null;
        date.current.value = null;
        // mealType.current.value = null;
    }


    return (
        <form className="calories-form" onSubmit={AddFood}>
            <div className="form-inner">
                <input type="text" name="desc" id="desc" placeholder="Enter food" ref={desc}/>
                <input type="number" name="servingSize" placeholder="Enter serving size" ref={servingSize}/>
                <input type="date" name="date" id="date" placeholder="Calorie date..." ref={date}/>
                <select className="mealType" onChange={(e)=>{ const selectedMeal = e.target.value; 
                setmealType(selectedMeal) }}>
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