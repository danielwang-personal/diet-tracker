import React, {useRef} from 'react' 

export default function CalorieForm({calories, setCalories}) {
    const desc = useRef(null);
    const date = useRef(null);
    const calorieNo = useRef(null);

    const AddCalorie = e => {
        e.preventDefault();

        let d=date.current.value.split("-");
        let newD = new Date(d[0], d[1], d[2])

        setCalories([...calories, {
            "desc": desc.current.value,
            "calorieNo": calorieNo.current.value,
            "date": newD.getTime()
        }]);

        desc.current.value = "";
        calorieNo.current.value = null;
        date.current.value = null;
    }

    return (
        <form className="calories-form" onSubmit={AddCalorie}>
            <div className="form-inner">
                <input type="text" name="desc" id="desc" placeholder="Calorie Description..." ref={desc}/>
                <input type="number" name="calorieNo" placeholder="No Calories..." ref={calorieNo}/>
                <input type="date" name="date" id="date" placeholder="Calorie date..." ref={date}/>
                <input type="submit" value="Add calorie"/>
            </div>
        </form>
    )
}
