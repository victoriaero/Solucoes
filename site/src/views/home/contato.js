import React from 'react';
import "./index.css";

class Contato extends React.Component {
  
    render() {
      return (

        <section id="contato" className="contato">
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-5 contato-box">
                <h1 className="title">Contato</h1>
                <p className="txt">
                  Para mais informações, entre em contato conosco<br/> através do formulário ao lado,<br/>
                  ou então através do número (31) 98572-4865.
                </p>
                <div className="redes-box">
                  <p className="txt">
                    Nos siga nas redes
                  </p>
                  <div className="icones">
                    <a href="#"><i className="fab icone-redes fa-instagram fa-3x"></i></a>
                    <a href="#"><i className="fab icone-redes fa-facebook-f fa-3x"></i></a>
                    <a href="#"><i className="fab icone-redes fa-twitter fa-3x"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="frm-box shadow">
                  <form className="form-group" method="POST" action="#">
                    <p>Preencha o formulário</p>
                    <input className="form-control frm-input" type="text" placeholder="Nome"/>
                    <input className="form-control frm-input" type="text" placeholder="Email"/>
                    <input className="form-control frm-input" type="text" placeholder="Assunto"/>
                    <textarea className="form-control frm-input" rows="5" placeholder="Mensagem"></textarea>
                    <button className="btn btn-outline-light" type="submit">Enviar</button>
                  </form>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </section>
      );
    }
}

export default Contato;