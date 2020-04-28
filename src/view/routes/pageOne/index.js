import React, { Component } from 'react'
import styles from './style.less'
import { Button } from 'antd'
import { connect } from 'react-redux'
// import { hot } from "react-hot-loader/root";

import Sub from '../../../components/SubComponentOne'
class PageOne extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  
  render() {
    
    return (
      <div className={styles.main}>
        我是第一个页面
        <Sub />
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

