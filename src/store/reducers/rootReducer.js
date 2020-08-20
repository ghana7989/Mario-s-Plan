import { combineReducers } from "redux"
import projectReducer from "./projectReducer"
import authReducer from "./authReducer"
import { firestoreReducer } from "redux-firestore"
import { firebaseReducer } from "react-redux-firebase";

// firestoreReducer is for connecting redux with firestore so that we can use firestore database in state
// firebaseReducer is for syncing redux ourstore state with firebase Authentication
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer