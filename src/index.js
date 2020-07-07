import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "overmind-react";
import {overmind} from './Others/OvermindHelper'
import Whole from "./Components/Whole";

ReactDOM.render(
    <React.StrictMode>
        <Provider value={overmind}>
            <Whole/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
