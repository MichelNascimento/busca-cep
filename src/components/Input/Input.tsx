import React from 'react'
import './InputStyle.css'

type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ onChange }) => {
  return (
    <input type="text" placeholder="Digite o CEP aqui..." onChange={onChange}/>
  )
}

export default Input