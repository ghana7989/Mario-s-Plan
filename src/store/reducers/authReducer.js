
const initialState = {
    authError: null
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_ERROR":
            return {
                ...state,
                authError: "Login failed"
            }
        case "LOGIN_SUCCESS":
            return {
                ...state,
                authError: null
            }
        case "SIGN_OUT":
            return {
                state
            }

        default:
            return {
                state
            }
    }
}

export default authReducer