import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from "redux-thunk"
import { reduxFirestore, getFirestore, createFirestoreInstance } from "redux-firestore"
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase"
import fbConfig from "./config/fbConfig"
import firebase from "firebase/app"

const store = createStore(rootReducer,
    compose(    
        // These are Enhancers and compose is used to bind them just like rootreducer binds all the reducers
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebase, fbConfig),
    )
)
const ReactReduxFirebase = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}


ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...ReactReduxFirebase}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();