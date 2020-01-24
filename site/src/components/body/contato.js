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
        <form className="form-group frm-contato" onSubmit={this.handleSubmit}>
          <h1 className="title">Contato</h1>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <h3 className="title-p">Informações</h3>
              <p className="txt">Telefone: (xx) 9 xxxx-xxxx</p>
              <p className="txt">Endereço: Rua Abcdário Bairro Números, xxx</p>
            </div>
            <div className="col-md-4">
              <h3 className="title-p">Fale Conosco</h3>
              <input className="form-control frm-input" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Nome"/>
              <input className="form-control frm-input" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Email"/>
              <input className="form-control frm-input" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Assunto"/>
              <textarea className="form-control frm-input" rows="5" value={this.state.value} onChange={this.handleChange} placeholder="Mensagem"></textarea>
              <button className="btn btn-primary" type="submit">Enviar</button>
            </div>
            <div className="col-md-2"></div>          
          </div>
        </form>
      );
    }
}

export default Contato;