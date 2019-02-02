import React from 'react';
import './App.css';

const App = () => <PersonList/>;

const PersonList = () => {

  const people = [
    {
      img:22, name:'John', job:'Developer'
    },
    {
      img:69, name: 'Ken', job: 'Engineer'
    },
    {
      img:55, name: 'Tom', job: 'Analyst'
    },
  ]
  return (
    <section>
      <Person person={people[0]}/>
      <Person person={people[1]}>
        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h6>
      </Person>
      <Person person={people[2]}/>
    </section>
  );
};

const Person = props => {
  const {img, name, job} = props.person;
  const {children} = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
return(
  <div className="person"> 
    <img src={url} alt="person image"/>
    <div>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </div>
  </div>
)
};

export default App;
