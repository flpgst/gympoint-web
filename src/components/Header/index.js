import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Content, Profile } from './styles'
import Notifications from '~/components/Notifications'
import logo from '~/assets/logo-small.svg'

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="gympoint" />
          <Link to="/matriculas">Lista de matrículas</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Nome perfil</strong>
              <Link to="/perfil">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/44/admin@gympoint.com.png"
              alt="admin"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}
