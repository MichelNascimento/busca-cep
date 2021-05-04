import './ButtonStyle.css'

type ButtonProps = {
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>Buscar</button>
  )
}

export default Button