import React from 'react';
import "./NotFound.css"

const NotFound = () => {
    return (
        <div>
            <div className="not-found">
                <h1>404</h1>
                <h2>Oops! Page Not Found</h2>
                <p>The page you are looking for does not exist.</p>
                <a href="/">Go Back Home</a>
            </div>
        </div>
    );
};

export default NotFound;