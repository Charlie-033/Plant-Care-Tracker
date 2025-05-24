import React from "react";
import Hero from "./Hero";
import DocumentTitle from "../Others/DocumentTitle";
import NewPlants from "./NewPlants";
import BeginnerPlant from "./BeginnerPlant";
import Mistakes from "./Mistakes";
import Welcome from "./Welcome";

const Home = () => {
  DocumentTitle("Home");
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <NewPlants />
        <BeginnerPlant />
        <Mistakes />
        <Welcome />
      </div>
    </div>
  );
};

export default Home;
