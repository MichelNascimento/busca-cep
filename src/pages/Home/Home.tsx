import React, { useState, useContext } from 'react'

import Header from '../../components/Header/Header'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

import { ZipCodeContext } from '../../contexts/ZipCodeContext'

import { GetZipCode } from '../../services/GetZipCode'

import './HomeStyle.css'

const Home: React.FC = () => {
  const [zipCode, setZipCode] = useState('')

  const { setData } = useContext(ZipCodeContext)

  const handleZipCode = async () => {
    const data = await GetZipCode(zipCode)

    if (data.erro) {
      alert('Ocorreu um erro na busca do CEP. Por favor, valide se as informações inseridas estão corretas.')
      return
    }

    setData({
      street: data?.logradouro ?? '',
      zipCode: data?.cep ?? '',
      district: data?.bairro ?? '',
      locality: data?.localidade ?? '',
      state: data?.uf ?? '',
    })
  }

  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <h1>O Brasil inteiro está aqui</h1>
        <span>Informe um CEP no campo abaixo e realize uma busca para visualizar mais detalhes do endereço.</span>
        <div className="search-container">
          <Input onChange={e => setZipCode(e.target.value)} />
          <Button onClick={handleZipCode} />
        </div>
      </div>
    </div>
  )
}

export default Home