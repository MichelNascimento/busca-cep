import './ButtonStyle.css'

type ButtonProps = {
  onClick: () => void
}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick}>Buscar</button>
  )
}

export default Button