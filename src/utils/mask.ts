const handleKeyUp = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 9
  let value = e.currentTarget.value
  value = value.replace(/\D/g, "") // permitindo que sejam inseridos apenas digitos
  value = value.replace(/(\d{5})(\d)/, "$1-$2") // aplicando a máscara, inserindo um hífen após os primeiros 5 digitos.
  e.currentTarget.value = value // devolvendo o valor formatado para o input
}

export default handleKeyUp