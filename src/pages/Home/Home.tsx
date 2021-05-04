import { useState } from 'react'

import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import Input from '../../components/Input/Input'

import './HomeStyle.css'

import GetCep from '../../services/GetCep'

const Home: React.FC = () => {
  const [cep, setCep] = useState(0)

  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <h1>O Brasil inteiro está aqui</h1>
        <span>Informe um CEP no campo abaixo e realize uma busca para visualizar mais detalhes do endereço.</span>
        <div className="search-container">
          <Input onChange={e => setCep(e.target.value)} />
          <Button onClick={() => GetCep(cep)} />
        </div>
      </div>
    </div>
  )
}

export default Home