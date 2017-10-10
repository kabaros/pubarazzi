import React from 'react';
import './AppHeader.css';

export default ({ title, closeButton = () => {} }) => {
    if (title) {
        return (<header className="app-header">
            {title}
            <div className="close-button" onClick={closeButton}>x</div>
        </header>)
    }
    return <header className="app-header">Where do you want to go today?</header>
}