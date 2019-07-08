import React from 'react';
import {Link} from 'react-router-dom';

const Home = ({ auth }) => {
    const isAuthenticated = auth.isAuthenticated();
    return (
        <div>
            <h1>
                Home
            </h1>
            {isAuthenticated ? <Link to="/profile">View profile</Link> :
            <button onClick={auth.login}>Log in</button>}
        </div>
    );
};

export default Home;