import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './store/reducers/rootReducer';
import { Provider, useSelector } from 'react-redux';
import thunk from "redux-thunk"
import { reduxFirestore, getFirestore, createFirestoreInstance } from "redux-firestore"
import { getFirebase, ReactReduxFirebaseProvider, isLoaded } from "react-redux-firebase"
import fbConfig from "./config/fbConfig"
import firebase from "firebase/app"

const store = createStore(rootReducer,
    compose(
        // These are Enhancers and compose is used to bind them just like rootreducer binds all the reducers
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebase, fbConfig),
    )
)
const ReactReduxFirebaseConfig = {

    userProfile: "users",
    useFirestoreForProfile: true
}
const ReactReduxFirebaseProps = {
    firebase,
    config: ReactReduxFirebaseConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
}
function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return null
    return children
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...ReactReduxFirebaseProps}>
            <AuthIsLoaded>
                <App />
            </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();