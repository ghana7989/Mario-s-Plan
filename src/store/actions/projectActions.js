export const createProject = (project) => {
    // We get extraArguments from index.js via thunk in this function
    return (dispatch, getState, extraArguments) => {
        const { getFirestore } = extraArguments
        const firestore = getFirestore();
        // Some Async Function Call
        firestore.collection("projects").add({
            ...project,
            authorFirstName: "Bull",
            authorLastName: "Pitta",
            authorId: 8574852,
            createdAt: new Date()
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