import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FoodForm from './components/FoodForm';
import FoodList from './components/FoodList';

function App() {
  const [calories, setCalories] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(()=> {
    let temp = 0;
    for(let i = 0; i < calories.length; i++) {
      temp += parseInt(calories[i].servingSize);
    }

    setTotalCalories(temp);
  }, [calories]);


  return (
    <div className="App">
      <Header totalCalories={totalCalories}/>
      <FoodForm calories={calories} setCalories={setCalories}/>
      <FoodList calories={calories} setCalories={setCalories}/>
    </div>
  );
}

export default App;
