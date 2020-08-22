
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
        case "SIGNUP_SUCCESSFUL":
            console.log("SignUp Success")
            return {
                ...state,
                authError: null
            }
        case "SIGNUP_FAILED":
            console.log("SignUp Failed", action.err.message)
            return {
                ...state,
                authError: action.err.message
            }

        default:
            return {
                state
            }
    }
}

export default authReducer