import React, { useState, useEffect } from 'react';

import Friend from './Friend.js';

const FriendsList = (props) => {
    const [didDataFetch, setDidDataFetch] = useState(false);

    useEffect(() => {
        if(props.data.length !== 0) {
            setDidDataFetch(true);
        }
    }, [props.data]);

    console.log('CC: components:FriendsList.js FriendsList TESTING');

    return didDataFetch ? (
        <div>
            {props.data.map((item) => {
                return (
                    <Friend
                        key={item.id}
                        name={item.name}
                        age={item.age}
                        email={item.email}
                    />
                );
            })}
        </div>
    ) : (
        <p>Fetching data! Please wait...</p>
    );
};

export default FriendsList;