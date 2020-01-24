import React from 'react';
import Header from './components/header';
import Capa from './components/body/capa.js';
import Sobre from './components/body/sobre.js';
import Servicos from './components/body/servicos.js';
import Contato from './components/body/contato.js';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Capa />
        <Sobre />
        <Servicos />
        <Contato />
        <Footer />
    </div>
  );
}

export default App;