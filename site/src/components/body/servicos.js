import React from 'react';
import "./index.css";

class Servicos extends React.Component {
    render() {
        return(
            <div className="container servicos">
                <h1 className="title">Nossos Serviços</h1>
                <div className="row">
                    <div className="col-md-4 servico">
                        <h4 className="subtitle">Lorem Ipsum</h4>
                        <p className="txt">Etiam dictum a massa sagittis posuere. 
                        Donec id ex eu lorem tempor volutpat in vel magna. 
                        Aenean dolor quam, malesuada non quam vitae, fermentum 
                        convallis diam.</p>
                        <button className="btn btn-primary">Saiba Mais</button>
                    </div>
                    <div className="col-md-4 servico">
                        <h4 className="subtitle">Lorem Ipsum</h4>
                        <p className="txt">Etiam dictum a massa sagittis posuere. 
                        Donec id ex eu lorem tempor volutpat in vel magna. 
                        Aenean dolor quam, malesuada non quam vitae, fermentum 
                        convallis diam.</p>
                        <button className="btn btn-primary">Saiba Mais</button>
                    </div>
                    <div className="col-md-4 servico">
                        <h4 className="subtitle">Lorem Ipsum</h4>
                        <p className="txt">Etiam dictum a massa sagittis posuere. 
                        Donec id ex eu lorem tempor volutpat in vel magna. 
                        Aenean dolor quam, malesuada non quam vitae, fermentum 
                        convallis diam.</p>
                        <button className="btn btn-primary">Saiba Mais</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Servicos;