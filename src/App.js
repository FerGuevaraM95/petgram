import React, { useContext } from 'react'
import { Router, Redirect } from '@reach/router'

import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'
import { Logo } from './Logo'
import { Navbar } from './components/Navbar'
import { Context } from './Context'

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' noThrow />}
        {!isAuth && <Redirect from='/user' to='/login' noThrow />}
        {isAuth && <Redirect from='login' to='/' noThrow />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>

      <Navbar />
    </div>
  )
}
