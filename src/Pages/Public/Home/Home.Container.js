import { Done, InProgress, Open } from "Pages";

import React from "react";
import "./Home.Container.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <Open />
        <InProgress />
        <Done />
      </div>
    </div>
  );
};

export default Home;
