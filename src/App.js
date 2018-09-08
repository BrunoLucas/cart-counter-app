import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import Counter  from './component/counter/index'
import counterReducer  from './component/counter/counterReducer';

const reducers = combineReducers({
  counter: counterReducer
})

// ReactDOM.render(
//   <Provider store={createStore(reducers)}>
//       <Counter />
//   </Provider>
// , document.getElementById('app'))

class App extends Component {
  render() {
    return (  
    <Provider store={createStore(reducers)}>
               <Counter />
    </Provider>); 
  }
}

export default App;