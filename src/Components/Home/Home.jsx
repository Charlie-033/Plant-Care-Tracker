import React from 'react';
import Hero from './Hero';
import DocumentTitle from '../Others/DocumentTitle';

const Home = () => {
    DocumentTitle("Home")
    return (
        <div>
            <div >
                <Hero/>
            </div>
            <div className='max-w-7xl mx-auto'>

            </div>
        </div>
    );
};

export default Home;