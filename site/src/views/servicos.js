import React from 'react';
import "./index.css";

class Servicos extends React.Component {
    render() {
        return(
            <section id="servicos">
                <div className="container-fluid bg-servicos">
                    <h1 className="title text-center">NOSSOS SERVIÇOS</h1>
                    <div className="container servicos shadow">
                        <div className="row servico-box">
                            <div className="col-md-4 servico-1">
                                <i className="far fa-building icone fa-5x"></i>
                                <h4 className="subtitle">Lorem Ipsum</h4>
                                <p className="txt">Etiam dictum a massa sagittis posuere. 
                                Donec id ex eu lorem tempor volutpat in vel magna. 
                                Aenean dolor quam, malesuada non quam vitae.</p>
                                <button className="btn btn-outline-light">Saiba Mais</button>
                            </div>
                            <div className="col-md-4 servico-2">
                                <i className="fas fa-paste icone fa-5x"></i>
                                <h4 className="subtitle">Lorem Ipsum</h4>
                                <p className="txt">Etiam dictum a massa sagittis posuere. 
                                Donec id ex eu lorem tempor volutpat in vel magna. 
                                Aenean dolor quam, malesuada non quam vitae.</p>
                                <button className="btn btn-outline-light">Saiba Mais</button>
                            </div>
                            <div className="col-md-4 servico-3">
                                <i className="fas fa-user-friends icone fa-5x"></i>
                                <h4 className="subtitle">Lorem Ipsum</h4>
                                <p className="txt">Etiam dictum a massa sagittis posuere. 
                                Donec id ex eu lorem tempor volutpat in vel magna. 
                                Aenean dolor quam, malesuada non quam vitae.</p>
                                <button className="btn btn-outline-light">Saiba Mais</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Servicos;