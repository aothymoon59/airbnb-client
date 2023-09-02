import React from 'react';
import Categories from '../components/Categories/Categories';
import Rooms from '../components/Rooms/Rooms';
import Filterbar from '../components/FilterBar/Filterbar';

const Home = () => {
    return (
        <>
            <Filterbar />
            <Rooms />
        </>
    );
};

export default Home;