import React, { Component } from 'react'
import styles from './style.less'
import { Button } from 'antd'
import { connect } from 'react-redux'
class PageTwo extends Component {
  render() {
    console.log('第二个页面render', this.props)
    return (
      <div className={styles.main}>
        我是第二个页面
        <div>
          <Button onClick={() => {
            this.props.history.push('/index.html')
          }}>返回</Button>
        </div>
      </div>
    )
  }
}
function select(state) {
  return {
    pageOne: state.pageOne,
    pageTwo: state.pageTwo,
  }
}
function dispatch(dispatch) {
  return {
    dispatch
  }
}
export default connect(select, dispatch)(PageTwo)

