import React from 'react';
//Importação do icone utilizado no botão.
import { FiArrowRight } from 'react-icons/fi';

//Import para melhorar a requisição de chamadas dos componenetes.
import {Link} from 'react-router-dom';

//Import do css das páginas.
import '../styles/pages/landing.css'
//Importação da imagen.
import logoImg from '../Images/Logo.svg';

function Landing() {
  return (
    <div id="page-landing">

      <div className="content-wrapper">
        <img src={logoImg} alt="happy logo" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visiste orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>

      </div>



    </div>
  );
}

export default Landing;