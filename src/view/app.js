import React, { Component } from 'react'
import RootRouter from "./router";
import ReactDOM from 'react-dom'
import { BrowserRouter as RouterContainer } from "react-router-dom";
import { connect } from 'react-redux'
class App extends Component {
  constructor(props) {
    super(props);
    console.log('app的props：',props)
  }
  render() {
    const supportsHistory = 'pushState' in window.history;
    return (
      <RouterContainer basename="/app1" forceRefresh={!supportsHistory} >
        <RootRouter />
      </RouterContainer>
    )
  }
}
function select(state) {
  return {
    app: state.app
  }
}
function action(dispatch) {
  return {
    dispatch
  }
}
export default connect(
  select,
  action
)(App)