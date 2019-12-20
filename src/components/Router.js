import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DebatePicker from './DebatePicker'
import App from './App'
import NotFound from './NotFound'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={DebatePicker}></Route>
      <Route path="/debate/:id" component={App}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
)

export default Router
