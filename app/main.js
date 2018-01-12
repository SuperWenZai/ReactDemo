import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, hashHistory } from 'react-router-dom'
import Component1 from './components/Component1.jsx'
import Component3 from './components/Component3.jsx'

ReactDom.render(
  <Router history={hashHistory}>
    <div>
      <Route exact path='/' component={Component1} />
      <Route path='/Component3' component={Component3} />
    </div>
  </Router>,
  document.getElementById('root')
)
