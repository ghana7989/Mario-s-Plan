export const createProject = (project) => {
    return (dispatch, getState) => {
        // Some Async Function Call
        
        dispatch({
            type: "CREATE_PROJECT",
            project: project
        })
    }
}