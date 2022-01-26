export default (postsState = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
            break;
        case "CREATE":
            return postsState
            break;
        default:
            return postsState
    }
}