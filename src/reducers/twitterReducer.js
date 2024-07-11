import {CHANGE_IMAGE, CHANGE_NAME} from "../actions/userAction.js";
import {ADD_FOLLOWER, ADD_FOLLOWING, REMOVE_FOLLOWER, REMOVE_FOLLOWING} from "../actions/statsAction.js";


const defaultState = {
    user: {
      name: "Monster",
      image: "https://gravatar.com/avatar/123?d=monsterid"
    },
    stats: {
        following: 50,
        followers: 500
    }
}

export const twitterReducer = (state = defaultState,action) => {
    switch (action.type){
        case CHANGE_NAME:
            return {...state, user: {...state.user, name: action.payload || state.user.name}}
        case CHANGE_IMAGE:
            return {...state, user: {...state.user, image: action.payload || state.user.image}}
        case ADD_FOLLOWER:
            return {...state, stats: {...state.stats, followers: state.stats.followers+1 || state.stats.followers}}
        case REMOVE_FOLLOWER:
            return {...state, stats: {...state.stats, followers: state.stats.followers>0 ? state.stats.followers-1 : state.stats.followers}}
        case ADD_FOLLOWING:
            return {...state, stats: {...state.stats, following: state.stats.following+1 || state.stats.following}}
        case REMOVE_FOLLOWING:
            return {...state, stats: {...state.stats, following: state.stats.following>0 ? state.stats.following-1 : state.stats.following}}
        default:
            return state;
    }
}

