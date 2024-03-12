import React from 'react';

function Header() {
  return (
    <header>
      <div className="container">
        <h1>VLV Advogados Associados</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item"><a className="nav-link" href="#sobre">Sobre</a></li>
            <li className="nav-item"><a className="nav-link" href="#areas">Áreas de Atuação</a></li>
            <li className="nav-item"><a className="nav-link" href="#equipe">Equipe</a></li>
            <li className="nav-item"><a className="nav-link" href="#contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
