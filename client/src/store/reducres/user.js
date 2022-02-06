export default (user = {}, action) => {
    switch (action.type) {
        case 'SIGN-UP':
            return user(action.payload)
            break;
        case 'SIGN-IN':
            return user(action.payload)
            break;
        default:
            return user;
    }
}