import './ResultStyle.css'

const Result = () => {
  return (
    <div className="result-container">
      <div className="result">
        <h1>Rua John Doe</h1>
        <div className="data">
          <span>CEP: </span>
          <span>01001010</span>
        </div>
        <div className="data">
          <span>Bairro: </span>
          <span>Limoeiro</span>
        </div>
        <div className="data">
          <span>Logradouro: </span>
          <span>Nove de Julho</span>
        </div>
        <div className="data">
          <span>Localidade: </span>
          <span>São Paulo</span>
        </div>
        <div className="data">
          <span>Estado: </span>
          <span>SP</span>
        </div>
      </div>
      {/* <div className="empty-state">
        <span>O resultado da busca será exibido aqui.</span>
      </div> */}
    </div>
  )
}

export default Result