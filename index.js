import {AppRegistry} from 'react-native';
import React from 'react';
import { createStore, applyMiddleware } from "redux";
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import rootReducer from './src/rootReducer';

export const store = createStore(rootReducer,undefined,applyMiddleware(thunk))

const ReduxApp = () => (
<Provider store = {store}>
    <App/>
</Provider>
)
AppRegistry.registerComponent(appName, () => ReduxApp);
