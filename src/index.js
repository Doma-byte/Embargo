import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import Footer from './components/Home/Footer';
// import ContactMe from "./components/Contact/ContactMe";
// import Resume from "./components/About/Resume";
import Chat from "./components/Chatting/Chat";
// import reducer,{initialState} from "./reducer";
// import {StateProvider} from "./StateProvider";
import store from "./store";
import {Provider} from "react-redux";
store.subscribe(()=>console.log(store.getState()));

ReactDOM.render(
        <>
{/* <StateProvider initialState={initialState} reducer={reducer}> */}
<React.StrictMode>
<Provider store={store}>
<Chat/>
</Provider>
</React.StrictMode>
</>

,document.getElementById("root"));
