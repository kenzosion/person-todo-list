import React from 'react';
import './App.css';

const App = () => <PersonList/>;

const PersonList = () => {
  return (
    <Person />
  )
};

const Person = () => {
  const url = "https://randomuser.me/api/portraits/thumb/men/22.jpg";
return(
  <div className="person"> 
    <img src={url} alt="person image"/>
    <div>
      <h4>Name</h4>
      <h4>Job title</h4>
    </div>
  </div>
)
};

export default App;
