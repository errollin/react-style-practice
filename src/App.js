import React, { useState } from 'react';

import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';

import './App.css';

function App() {
  const [courseGoals, setCourseGoals] = useState([
    {
      id: 'g1',
      text: 'Do all exercises!',
    },
    {
      id: 'g2',
      text: 'Finish the course!',
    },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => {
        return goal.id !== goalId;
      });
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id='goal-form'>
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id='goals'>{content}</section>
    </div>
  );
}

export default App;
