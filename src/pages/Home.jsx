import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero/Hero';
import Working_Process from '../components/working_process/Working_Process';
import Dream_Location from '../components/Dream_Location/Dream_Location';
import axios from 'axios';
import Featured_Jobs from '../components/Featured_Jobs/Featured_Jobs';
import Job_Categories from '../components/Job_Categories/Job_Categories';

const Home = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/jobs')
            .then(data => {
                setJobs(data.data)
            })
    }, []);

    return (
        <div>
            <section>
                <Hero />
            </section>
            <section>
                <Working_Process />
            </section>
            <section>
                <Featured_Jobs jobs={jobs} />
            </section>
            <section>
                <Job_Categories jobs={jobs} />
            </section>
            <section>
                <Dream_Location />
            </section>
        </div>
    );
};

export default Home;