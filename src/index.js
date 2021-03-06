import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import Provider from "react-redux/es/components/Provider";
import {rootReducer} from "./redux/reducers/rootReducer";
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);

reportWebVitals();
