import React, { useState } from 'react';

import CourseInput from './components/CourseGoals/CourseInput/CourseInput';

import './App.css';

function App() {
  const [courseGoals, setCourseGoals] = useState(
    {
      id: 'g1',
      text: 'Do all exercises!',
    },
    {
      id: 'g2',
      text: 'Finish the course!',
    }
  );

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  return (
    <div>
      <section id='goal-form'>
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id='goals'></section>
    </div>
  );
}

export default App;
