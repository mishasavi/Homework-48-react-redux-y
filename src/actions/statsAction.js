export const ADD_FOLLOWER = "ADD_FOLLOWER";
export const REMOVE_FOLLOWER = "REMOVE_FOLLOWER"
export const ADD_FOLLOWING = "ADD_FOLLOWING";
export const REMOVE_FOLLOWING = "REMOVE_FOLLOWING"


export const addFollower = () => {
    return {
        type: ADD_FOLLOWER,
    }
}

export const removeFollower = () => {
    return {
        type: REMOVE_FOLLOWER,
    }
}

export const addFollowing = () => {
    return {
        type: ADD_FOLLOWING,
    }
}

export const removeFollowing = () => {
    return {
        type: REMOVE_FOLLOWING,
    }
}
