import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './view/app'
import store from './store/index'
import singleSpaReact from 'single-spa-react'

class Main extends React.Component{
  constructor(){
    super();
  }
  render(){
    return <Provider store={store}><App/></Provider>
  }
}
console.log(1111)
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Main,
  domElementGetter: document.getElementById('app1'),
})

export const bootstrap = [
  reactLifecycles.bootstrap,
]

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];