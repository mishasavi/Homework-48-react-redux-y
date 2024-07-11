import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeImage, changeName} from "../actions/userAction.js";

const Avatar = ({size}) => {
    const user = useSelector(store=>store.user); //подписались на обновления в юзере
    const dispatch = useDispatch(); //надо вызывать, дописывать (), автоматом не ставится
    const handleClickName = (e) => {
        e.preventDefault();
        const newName = prompt("Enter new name");
        dispatch(changeName(newName));
    }
    const handleClickImage = () => {
        const newId = prompt("Enter new monster id");
        dispatch(changeImage(`https://gravatar.com/avatar/${newId}?d=monsterid`));
    }
    return (
        <img onContextMenu={handleClickName}
             onClick={handleClickImage}
             className={`user-avatar ${size ?? ""}`}
             src={user.image} alt={'avatar'}/>
    );
};

export default Avatar;