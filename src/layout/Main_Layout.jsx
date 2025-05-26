import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';

const Main_Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <Navbar />
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    );
};

export default Main_Layout;