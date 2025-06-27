import React from "react";
import Hero from "./Hero";
import useDocumentTitle from "../Others/useDocumentTitle";
import NewPlants from "./NewPlants";
import BeginnerPlant from "./BeginnerPlant";
import Mistakes from "./Mistakes";
import Welcome from "./Welcome";
import Testimonials from "../Pages/Testimonials";
import Features from "./Features";
import EasyCarePlants from "./EasyCarePlants";

const Home = () => {
  useDocumentTitle("Home");
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <NewPlants />
        <BeginnerPlant />
        <EasyCarePlants/>
        <Testimonials/>
        <Mistakes />
        <Features/>
        <Welcome />
      </div>
    </div>
  );
};

export default Home;
