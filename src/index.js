import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import store from "./store";
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
    <>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>,
    </>, document.getElementById("root"));