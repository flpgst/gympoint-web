import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './route'
import SignIn from '~/pages/SignIn'
import Enrollments from '~/pages/Enrollment'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/matriculas" component={Enrollments} isPrivate />
    </Switch>
  )
}
