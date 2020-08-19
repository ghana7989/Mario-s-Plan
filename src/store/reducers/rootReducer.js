import { combineReducers } from "redux"
import projectReducer from "./projectReducer"
import authReducer from "./authReducer"
import { firestoreReducer } from "redux-firestore"


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer
});

export default rootReducer