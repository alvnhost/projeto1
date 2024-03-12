import React, { useState } from 'react';
import './App.css';
import Header from './header';
import Banner from './Banner';
import Section from './Section';
import Footer from './Footer';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dados do formulário:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    alert('Formulário enviado com sucesso!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <Header />
      <Banner />
      <Section id="sobre" title="Sobre Nós">
        <p>O VLV Advogados Associados é um escritório de advocacia localizado em Cabo Frio, RJ. Com uma equipe experiente e dedicada, oferecemos serviços jurídicos de alta qualidade para nossos clientes.</p>
      </Section>
      <Section id="areas" title="Áreas de Atuação">
        <ul>
          <li>Direito Civil</li>
          <li>Direito Penal</li>
          <li>Direito do Trabalho</li>
          <li>Direito de Família</li>
        </ul>
      </Section>
      <Section id="equipe" title="Nossa Equipe">
        <div className="row">
          <div className="col-md-6">
            <div className="member">
              <img src="advogado1.jpg" alt="Advogado 1" />
              <h3>João Silva</h3>
              <p>Advogado Sênior</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="member">
              <img src="advogado2.jpg" alt="Advogado 2" />
              <h3>Maria Oliveira</h3>
              <p>Advogada Júnior</p>
            </div>
          </div>
        </div>
      </Section>
      <Section id="contato" title="Contate-nos">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleInputChange} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </Section>
      <Footer />
    </div>
  );
}

export default App;
