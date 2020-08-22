export const createProject = (project) => {
    // We get extraArguments from index.js via thunk in this function
    return (dispatch, getState, extraArguments) => {
        const { getFirestore } = extraArguments
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        const firestore = getFirestore();
        const currentdate = new Date()
        const date = currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
        // Some Async Function Call
        firestore.collection("projects").add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: date
        }).then(() => {
            dispatch({
                type: "CREATE_PROJECT",
                project: project
            })
        }).catch(err => {
            dispatch(
                { type: "CREATE_PROJECT_ERROR", err }
            )
        })
    }
}