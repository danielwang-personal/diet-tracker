import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CalorieForm from './components/CalorieForm';
import CalorieList from './components/CalorieList';

function App() {
  const [calories, setCalories] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(()=> {
    let temp = 0;
    for(let i = 0; i < calories.length; i++) {
      temp += parseInt(calories[i].calorieNo);
    }

    setTotalCalories(temp);
  }, [calories]);


  return (
    <div className="App">
      <Header totalCalories={totalCalories}/>
      <CalorieForm calories={calories} setCalories={setCalories}/>
      <CalorieList calories={calories} setCalories={setCalories}/>
    </div>
  );
}

export default App;
