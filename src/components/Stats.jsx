import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addFollower, addFollowing, removeFollower, removeFollowing} from "../actions/statsAction.js";

const Stats = () => {
    const userStats = useSelector (store => store.stats);
    const dispatch = useDispatch();

    const handleClickFollowers = (e) => {
        e.preventDefault();
        dispatch(removeFollower());

    }
    const handleClickFollowing = (e) => {
        e.preventDefault();
        dispatch(removeFollowing());

    }

    return (
        <div>
            <p onContextMenu={handleClickFollowers} onClick={() => dispatch(addFollower())}>
                followers: {userStats.followers}</p>
            <p onContextMenu={handleClickFollowing} onClick={() => dispatch(addFollowing())}>
                following: {userStats.following}</p>
        </div>
    );
};

export default Stats;