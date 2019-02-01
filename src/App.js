import React from 'react';
import './App.css';


const Person = () => {
  return(
    <div> I am from the person component</div>
  )
};

const PersonList = () => {
  return (
    <Person />
  )
};

const App = () => <PersonList/>;


export default App;
