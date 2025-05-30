import React from 'react';
import Hero from '../components/Hero/Hero';
import Working_Process from '../components/working_process/Working_Process';
import Dream_Location from '../components/Dream_Location/Dream_Location';

const Home = () => {
    return (
        <div>
            <Hero />
            <section>
                <Working_Process />
            </section>
            <section>
                <Dream_Location />
            </section>
        </div>
    );
};

export default Home;