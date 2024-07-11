import React from 'react';
import Avatar from "./Avatar.jsx";
import {useSelector} from "react-redux";

const Profile = () => {
    const name = useSelector(store=>store.user.name);

    return (
        <div className={'user-stats'}>
            <Avatar size={"big"}/>
            <h2 >{name}</h2>
        </div>
    );
};

export default Profile;