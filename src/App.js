import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Blank from './Blank'

import Header from './Header/index'
import Start from './Start/index'

import styles from './App.module.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className={styles.container}>
        <Switch>
          <Route exact path="/test-fe">
            <Start />
          </Route>
          <Route path="/test-fe/step2">
            <Blank />
          </Route>
          <Route path="/test-fe/result">
            <Blank />
          </Route>
          <Route>
            <Redirect to="/test-fe" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
