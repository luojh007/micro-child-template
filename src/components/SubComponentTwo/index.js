import React, { Component } from 'react'
import styles from './style.less'
import { connect } from 'react-redux'
class SubComponentTwo extends Component {
  render() {
    console.log('子组件二render');
    return (
      <div className={styles.main}>
        我是一个组件2
      </div>
    )
  }
}
function select(state) {
  return {
    subComponentTwo: state,
  }
}
function dispatch(dispatch) {
  return {
    dispatch
  }
}
export default connect(select, dispatch)(SubComponentTwo);
