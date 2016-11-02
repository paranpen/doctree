import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
let { Router, Route, hashHistory } = require('react-router')
let Navigation = require('./components/navigation.js')
let Content = require('./components/DbList.js')
let Collections = require('./components/collections.js')
let Docs = require('./components/docs.js')

ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(<Navigation/>, document.getElementById('navigation'))
ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={Content}>
      <Route path="/dbs/:dbName" component={Collections}>
        <Route path="/dbs/:dbName/collections/:collectionName" component={Docs}>
        </Route>
      </Route>
    </Route>
  </Router>, document.getElementById('content'))
