import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Pages
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'
import ProfilePage from '../pages/ProfilePage'
import RegisterPage from '../pages/RegisterPage'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/feed" component={MainPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  )
}
