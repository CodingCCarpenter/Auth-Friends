import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <h1>Welcome to the Friends App!</h1>
            <h2>Your friends info, organized!</h2>
            <Link to='/login'>Login Here</Link>
        </div>
    );
};

export default Home;