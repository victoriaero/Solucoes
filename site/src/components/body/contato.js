import React from 'react';
import "./index.css";

class Contato extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      console.log(this.state.value)
      event.preventDefault();
    }
  
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
                  <input className="form-control frm-input" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Nome"/>
                  <input className="form-control frm-input" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Email"/>
                  <input className="form-control frm-input" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Assunto"/>
                  <textarea className="form-control frm-input" rows="5" value={this.state.value} onChange={this.handleChange} placeholder="Mensagem"></textarea>
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