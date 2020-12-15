import React from 'react';
import Header from './components/header';
import Capa from './views/home/capa.js';
import Sobre from './views/home/sobre.js';
import Servicos from './views/home/servicos.js';
import Contato from './views/home/contato.js';
import Footer from './components/footer';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <div className="container-fluid capa">
        <Routes />
        <Header />
        <Capa />
      </div>
        <Sobre />
        <Servicos />
        <Contato />
        <Footer />
    </div>
  );
}

export default App;