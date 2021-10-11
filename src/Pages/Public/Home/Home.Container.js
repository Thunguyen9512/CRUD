import { Todo } from "Pages";
import React from "react";
import './Home.Container.css'

const Home = () => {
  return (
    <div className = 'home'>
      <Todo />
      <Todo />
      <Todo />
    </div>
  )
};

export default Home;
