import React from 'react'
import api from '~/services/api'

// import { Container } from './styles';

export default function Enrollments() {
  api.get('/enrollments')
  return <h1>Matrículas</h1>
}
