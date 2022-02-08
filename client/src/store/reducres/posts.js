export default (posts = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
            break;
        case "CREATE_POST":
            return [...posts, action.payload]
            break;
        case "UPDATE_POST":
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
            break;
        case "DELETE_POST":
            return posts.filter((post) => post._id === action.payload.id);
        default:
            return posts;
    }
}