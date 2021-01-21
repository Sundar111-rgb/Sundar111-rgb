import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers} from "redux";
import { Provider } from "react-redux";
import { reducer1,reducer2 } from './reducers/Reducer';
import Howtouseref from './Howtouseref';
import Howtousecallback from './Howtousecallback';
// const  master = combineReducers({
//     red1:reducer1,
//     red2:reducer2
// })
const store = createStore(reducer1,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
   {/*<Provider  store={store}>*/}

       <Howtousecallback />
   {/*</Provider>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
