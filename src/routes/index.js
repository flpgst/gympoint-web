import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './route'
import SignIn from '~/pages/SignIn'
import Enrollments from '~/pages/Enrollment'
import Students from '~/pages/Students'
import NewStudent from '~/pages/Students/new'
import EditStudent from '~/pages/Students/edit'
import Programs from '~/pages/Programs'
import NewProgram from '~/pages/Programs/new'
import EditProgram from '~/pages/Programs/edit'
import Profile from '~/pages/Profile'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/matriculas" component={Enrollments} isPrivate />
      <Route path="/planos" exact component={Programs} isPrivate />
      <Route path="/planos/novo" component={NewProgram} isPrivate />
      <Route path="/planos/:id" component={EditProgram} isPrivate />
      <Route path="/alunos" exact component={Students} isPrivate />
      <Route path="/alunos/novo" component={NewStudent} isPrivate />
      <Route path="/alunos/:id" component={EditStudent} isPrivate />
      <Route path="/perfil" component={Profile} isPrivate />
    </Switch>
  )
}
