import React, { Component } from 'react'

export default class index extends Component {
  render() {
    console.log(this)
    return (
      <div>
        <div onClick={()=>{
          this.props.history.push('/page-one.html')
        }}>第一个页面</div>
        <div onClick={()=>{
          this.props.history.push('/page-two.html')
        }}>第二个页面</div>
      </div>
    )
  }
}
