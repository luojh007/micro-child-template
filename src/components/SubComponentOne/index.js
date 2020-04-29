import React, { Component } from 'react'
import styles from './style.less'
import { connect } from 'react-redux'
class SubComponentOne extends Component {
  render() {
    console.log('子组件一render')
    return (
      <div className={styles.main} onClick={() => {
        this.props.dispatch({
          type: 'SUB_COM_TWO_ADD',
          action: { data: '我是子组件一' }
        })
      }}>
        我是一个组件1
      </div>
    )
  }
}
function select(state) {
  return {
    subComponentOne: state.subComponentOne
  }
}
function dispatch(dispatch) {
  return {
    dispatch
  }
}
export default connect(select, dispatch)(SubComponentOne);
