import Header from '../../components/Header/Header'
import './NotFoundStyle.css'

import lost from '../../assets/lost.svg'

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="background-green">
        <Header />
      </div>
      <div className="content">
        <div className="approach">
          <h1>Oops!</h1>
          <p>A página que você tentou acessar não está disponível. <br />
          Clique no botão abaixo para voltar a tela de início.</p>
          <button>Voltar para o início</button>
        </div>
        <img src={lost} alt="Um homem segurando um mapa para entender sua localização" />
      </div>
    </div>
  )
}

export default NotFound