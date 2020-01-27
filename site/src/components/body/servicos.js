import React from 'react';
import "./index.css";

class Servicos extends React.Component {
    render() {
        return(
            <div className="container-fluid bg-servicos">
                <div className="container servicos shadow">
                    <h1 className="title text-center">Nossos Serviços</h1>
                    <div className="row servico-box">
                        <div className="col-md-4 servico">
                            <h4 className="subtitle">Lorem Ipsum</h4>
                            <p className="txt">Etiam dictum a massa sagittis posuere. 
                            Donec id ex eu lorem tempor volutpat in vel magna. 
                            Aenean dolor quam, malesuada non quam vitae.</p>
                            <button className="btn btn-outline-primary">Saiba Mais</button>
                        </div>
                        <div className="col-md-4 servico">
                            <h4 className="subtitle">Lorem Ipsum</h4>
                            <p className="txt">Etiam dictum a massa sagittis posuere. 
                            Donec id ex eu lorem tempor volutpat in vel magna. 
                            Aenean dolor quam, malesuada non quam vitae.</p>
                            <button className="btn btn-outline-primary">Saiba Mais</button>
                        </div>
                        <div className="col-md-4 servico">
                            <h4 className="subtitle">Lorem Ipsum</h4>
                            <p className="txt">Etiam dictum a massa sagittis posuere. 
                            Donec id ex eu lorem tempor volutpat in vel magna. 
                            Aenean dolor quam, malesuada non quam vitae.</p>
                            <button className="btn btn-outline-primary">Saiba Mais</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Servicos;