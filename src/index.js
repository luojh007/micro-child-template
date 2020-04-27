import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
// import App from './view/app'
// import store from './store/index'
import singleSpaReact from 'single-spa-react'

// class Main extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return <Provider store={store}><App /></Provider>
//   }
// }
// if (process.env.NODE_ENV === 'development') {
//   // 开发环境直接渲染
//   ReactDOM.render(<Main />, document.getElementById('app'));
// }
class SimpleMain extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>我是子系统</div>
  }
}
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: (spa) => {
    return <SimpleMain />
  },
  domElementGetter: domElementGetter,
})
//防抖，防止频繁的切换导致页面
function domElementGetter() {
  let el = document.getElementById('single_app')
  if (!el) {
    el = document.createElement('div')
    el.id = 'single_app'
  }
  let timer = null
  timer = setInterval(() => {
    if (document.querySelector('#app')) {
      document.querySelector('#app').appendChild(el)
      clearInterval(timer)
    }
  }, 100)

  return el
}
export const bootstrap = [reactLifecycles.bootstrap]

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];

export const unload = [reactLifecycles.unload];
