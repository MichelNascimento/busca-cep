import React from 'react'
import './InputStyle.css'

import mask from '../../utils/mask'

type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ onChange }) => {
  return (
    <input
      className="input-zip-code"
      type="text"
      placeholder="Digite o CEP aqui..."
      onChange={onChange}
      onKeyUp={mask}
    />
  )
}

export default Input