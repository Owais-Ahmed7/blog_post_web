export default (user = "", action) => {
    switch (action.type) {
        case 'SIGN-UP':
            return action.payload;
            break;
        case 'SIGN-IN':
            return action.payload;
            break;
        default:
            return user;
    }
}