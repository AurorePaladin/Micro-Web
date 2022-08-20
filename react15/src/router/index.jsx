import React from 'react'
import { Router, Route, hashHistory, Redirect } from 'react-router';

// 资讯页面
import Information from '../pages/information/Information.jsx'
class BasicMap extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        {/* 资讯列表 */}
        <Route path="/information" component={Information}/>
      </Router>
    )
  }
}

export default BasicMap
