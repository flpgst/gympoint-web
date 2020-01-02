import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Container, Content, Profile } from './styles'
import Notifications from '~/components/Notifications'
import logo from '~/assets/logo-small.svg'

export default function Header() {
  const profile = useSelector(state => state.user.profile)
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="gympoint" />
          <Link to="/alunos">Alunos</Link>
          <Link to="/planos">Planos</Link>
          <Link to="/matriculas">Matrículas</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/perfil">Meu Perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/44/admin@gympoint.com.png'
              }
              alt="admin"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}
