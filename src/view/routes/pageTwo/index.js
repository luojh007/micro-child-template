import React, { Component } from 'react'
import styles from './style.less'
import { Button } from 'antd'
export default class index extends Component {
  render() {
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
