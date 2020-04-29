import React, { Component } from 'react'
import styles from './style.less'
import { Button } from 'antd'
import { connect } from 'react-redux'
// import { hot } from "react-hot-loader/root";

import SubOne from '../../../components/SubComponentOne'
import SubTwo from '../../../components/SubComponentTwo'
class PageOne extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  addData = () => {
    this.props.dispatch({
      type: 'PAGETWO_GET',
      actions: {
        data: '我是从第一个页面传过来的数据'
      }
    })
  }
  render() {

    return (
      <div className={styles.main}>
        我是第一个页面
        <SubOne />
        <SubTwo />
        <Button onClick={this.addData}>新增数据</Button>
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
    pageOne: state.pageOne
  };
}
function actions(dispatch, ownProps) {
  return { dispatch };
}
export default connect(select, actions)(PageOne)

