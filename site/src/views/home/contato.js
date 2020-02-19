import React from 'react';
import "./index.css";

class Contato extends React.Component {
  
    render() {
      return (
        <section id="contato">
          <div className="container-fluid contato">
            <form className="form-group">
            <div className="container frm-contato">
              <h1 className="title text-center">Contato</h1><br/>
              <div className="row">
                <div className="col-md-6 info">
                  <p className="txt info-txt">
                    Para mais informações, entre em contato conosco<br/> através do formulário ao lado,<br/>
                    ou então através do número (31) 98572-4865.
                  </p>
                </div>
                <div className="col-md-6 frm">
                  <input className="form-control frm-input" type="text" placeholder="Nome"/>
                  <input className="form-control frm-input" type="text" placeholder="Email"/>
                  <input className="form-control frm-input" type="text" placeholder="Assunto"/>
                  <textarea className="form-control frm-input" rows="5" placeholder="Mensagem"></textarea>
                  <button className="btn btn-primary" type="submit">Enviar</button>
                </div>      
              </div>
            </div>
            </form>
          </div>
        </section>
      );
    }
}

export default Contato;