import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './route'
import SignIn from '~/pages/SignIn'
import Enrollments from '~/pages/Enrollment'
import Profile from '~/pages/Profile'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/matriculas" component={Enrollments} isPrivate />
      <Route path="/perfil" component={Profile} isPrivate />
    </Switch>
  )
}
