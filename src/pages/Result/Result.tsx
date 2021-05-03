import { useContext } from 'react'
import { ZipCodeContext } from '../../contexts/ZipCodeContext'
import './ResultStyle.css'

const Result = () => {
  const context = useContext(ZipCodeContext)

  return (
    <div className="result-container">
      <div className="result">
        <h1>{context.street}</h1>
        <div className="data">
          <span>CEP: </span>
          <span>{ }</span>
        </div>
        <div className="data">
          <span>Bairro: </span>
          <span>{ }</span>
        </div>
        <div className="data">
          <span>Logradouro: </span>
          <span>{ }</span>
        </div>
        <div className="data">
          <span>Localidade: </span>
          <span>{ }</span>
        </div>
        <div className="data">
          <span>Estado: </span>
          <span>{ }</span>
        </div>
      </div>
      <div className="empty-state">
        <span>O resultado da busca será exibido aqui.</span>
      </div>
    </div>
  )
}

export default Result