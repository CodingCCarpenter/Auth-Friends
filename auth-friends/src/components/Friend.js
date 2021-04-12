import React from 'react';

const Friend = (props) => {
    return (
        <div className='friend'>
            <h2>{props.name}</h2>
            <p>{props.age} years old</p>
            <p><em>{props.email}</em></p>
        </div>
    );
};

export default Friend;