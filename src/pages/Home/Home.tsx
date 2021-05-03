import React, { useState } from 'react'

import Header from '../../components/Header/Header'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

import './HomeStyle.css'

import GetZipCode from '../../services/GetZipCode'

const Home: React.FC = () => {
  const [zipCode, setZipCode] = useState(0)

  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <h1>O Brasil inteiro está aqui</h1>
        <span>Informe um CEP no campo abaixo e realize uma busca para visualizar mais detalhes do endereço.</span>
        <div className="search-container">
          <Input onChange={e => setZipCode(e.target.value)} />
          <Button onClick={() => GetZipCode(zipCode)} />
        </div>
      </div>
    </div>
  )
}

export default Home