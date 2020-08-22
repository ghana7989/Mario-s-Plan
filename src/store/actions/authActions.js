export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({
                type: "LOGIN_SUCCESS"
            })
        }).catch((error) => {
            dispatch({
                type: "LOGIN_ERROR", error
            })
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signOut()
            .then(
                () => {
                    dispatch({ type: "SIGN_OUT" })
                }
            )
    }
}


export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        // Signing up a new User
        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then((res) => {
                return firestore.collection("users").doc(res.user.uid).set({
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    initials: newUser.firstName[0] + newUser.lastName[0]
                })
            }).then(() => {
                dispatch({
                    type: "SIGNUP_SUCCESSFUL"
                })
            }).catch(err=>{
                dispatch({
                    type:"SIGNUP_FAILED",
                    err 
                })
            })
    }
}