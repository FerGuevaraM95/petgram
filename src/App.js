import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './Logo'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={2} />
  </div>
)
