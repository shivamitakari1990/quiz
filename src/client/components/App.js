import React, {Component} from 'react'
import ListQuestions from '../containers/ListQuestions'
import { Router, hashHistory } from 'react-router'
import routes from 'client/routes/routes'
import {Button} from 'react-bootstrap'
import reducers from 'client/reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


export default class App extends Component {
  render () {
    return (
      <Provider store={createStore(reducers)}>
        <Router>
          {routes}
        </Router>
      </Provider>
    )
  }
}
