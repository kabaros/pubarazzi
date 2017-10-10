import React from 'react';

export default (props) => {
    const { pub, onSelectPub } = props;
    return (
        <div className="pub" onClick={onSelectPub}>
            <h1>{pub.name}</h1>
        </div>
    )
}