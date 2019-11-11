import React from 'react'

import { FavsWichQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

const Favs = () => (
  <Layout title='Tu favoritos' subtitle='Tus Mascotas favoritas'>
    <FavsWichQuery />
  </Layout>
)

export default Favs
