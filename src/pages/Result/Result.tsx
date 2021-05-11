import { useContext } from 'react'
import { ZipCodeContext } from '../../contexts/ZipCodeContext'

import './ResultStyle.css'

const Result = () => {
  const { address } = useContext(ZipCodeContext)
  const { district, locality, state, street, zipCode } = address

  return (
    <div className="result-container">
      { !address.zipCode ? (
        <div className="empty-state">
          <span>O resultado da busca será exibido aqui.</span>
        </div>
      ) : (
        <div className="result">
          <h1>{street}</h1>
          <div className="data">
            <span>CEP: </span>
            <span>{zipCode}</span>
          </div>
          <div className="data">
            <span>Bairro: </span>
            <span>{district}</span>
          </div>
          <div className="data">
            <span>Logradouro: </span>
            <span>{street}</span>
          </div>
          <div className="data">
            <span>Localidade: </span>
            <span>{locality}</span>
          </div>
          <div className="data">
            <span>Estado: </span>
            <span>{state}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Result