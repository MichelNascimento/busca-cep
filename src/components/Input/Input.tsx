import './InputStyle.css'

type InputProps = {
  onChange: (e: any) => void
}

const Input = (props: InputProps) => {
  return (
    <input type="text" placeholder="Digite o CEP aqui..." onChange={props.onChange}/>
  )
}

export default Input