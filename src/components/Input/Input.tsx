import React from 'react'
import InputZipCode from 'react-input-mask'
import './InputStyle.css'

type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ onChange }) => {
  return (
    <InputZipCode mask="99999-999" className="input-zip-code" type="text" placeholder="Digite o CEP aqui..." onChange={onChange}/>
  )
}

export default Input