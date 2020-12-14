import React from 'react';
import "./index.css";

class Servicos extends React.Component {
    render() {
        return(
            <section id="servicos">
                <div className="container-fluid bg-servicos">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="texto-servicos">
                                <h1 className="title">NOSSOS SERVIÇOS</h1>
                                <p className="txt">
                                    Etiam dictum a massa sagittis posuere. 
                                    Donec id ex eu lorem tempor volutpat in vel magna. 
                                    Aenean dolor quam, malesuada non quam vitae.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 servico">
                            <div className="servico-box shadow">
                                <div className="icone-round">
                                    <i className="far fa-building icone fa-2x"></i>
                                </div>
                                <div className="texto-servico">
                                    <h5 className="subtitle">Lorem Ipsum</h5>
                                    <p className="txt">Etiam dictum a massa sagittis posuere. 
                                    Donec id ex eu lorem tempor volutpat in vel magna. 
                                    Aenean dolor quam, malesuada non quam vitae.</p>
                                </div>
                                {/* <button className="btn btn-outline-primary btn-sm btn-servico">Saiba Mais</button> */}
                            </div>
                        </div>
                        <div className="col-md-4 servico">
                            <div className="servico-box shadow">
                                <div className="icone-round">
                                    <i className="fas fa-paste icone fa-2x"></i>
                                </div>
                                <div className="texto-servico">
                                    <h5 className="subtitle">Lorem Ipsum</h5>
                                    <p className="txt">Etiam dictum a massa sagittis posuere. 
                                    Donec id ex eu lorem tempor volutpat in vel magna. 
                                    Aenean dolor quam, malesuada non quam vitae.</p>
                                </div>
                                {/* <button className="btn btn-outline-primary btn-sm btn-servico">Saiba Mais</button> */}
                            </div>
                        </div>
                        <div className="col-md-4 servico">
                            <div className="servico-box shadow">
                                <div className="icone-round">
                                    <i className="fas fa-user-friends icone fa-2x"></i>
                                </div>
                                <div className="texto-servico">
                                    <h5 className="subtitle">Lorem Ipsum</h5>
                                    <p className="txt">Etiam dictum a massa sagittis posuere. 
                                    Donec id ex eu lorem tempor volutpat in vel magna. 
                                    Aenean dolor quam, malesuada non quam vitae.</p>
                                </div>
                                {/* <button className="btn btn-outline-primary btn-sm btn-servico">Saiba Mais</button> */}
                            </div>
                        </div>
                    </div> 
                </div>
                </div>
            </section>
        );
    }
}

export default Servicos;