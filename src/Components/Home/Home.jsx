import React from 'react';
import Hero from './Hero';
import DocumentTitle from '../Others/DocumentTitle';
import NewPlants from './NewPlants';
import BeginnerPlant from './BeginnerPlant';
import Mistakes from './Mistakes';

const Home = () => {
    DocumentTitle("Home");
    return (
        <div>
            <div >
                <Hero/>
            </div>
            <div >
                <NewPlants/>
                <BeginnerPlant/>
                <Mistakes/>
            </div>
        </div>
    );
};

export default Home;