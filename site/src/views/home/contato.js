import React, { useState } from 'react';
import "./index.css";

import api from '../../services/api';

      export default function Validation() {

        const [name, setName] = useState('');
        const [mail, setMail] = useState('');
        const [subject, setSubject] = useState('');
        const [message, setMessage] = useState('');
      
        async function handleSendMail(e){
      
          e.preventDefault();
      
          const email = {
            name,
            mail,
            subject,
            message
          };
      
          try {
            await api.post("/form", email);
            alert("Mensagem enviada com sucesso!");
            window.location.reload();
          } catch (err) {
            console.log(err);
            alert("Houve algum erro, tente novamente.");
          }
      
        }
  
      return (

        <section id="contato" className="contato">
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-5 contato-box">
                <h1 className="title">Contato</h1>
                <p className="txt">
                  Para mais informações, entre em contato conosco através do formulário
                  ou por meio do número (31) 98572-4865.
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
                  <form id="form_email" className="form-group" onSubmit={handleSendMail}>
                    <p>Preencha o formulário</p>
                    <input value={name} onChange={e => setName(e.target.value)} className="form-control frm-input" type="text" placeholder="Nome" required/>
                    <input value={mail} onChange={e => setMail(e.target.value)} className="form-control frm-input" type="email" placeholder="Email" required/>
                    <input value={subject} onChange={e => setSubject(e.target.value)} className="form-control frm-input" type="text" placeholder="Assunto" required/>
                    <textarea value={message} onChange={e => setMessage(e.target.value)} className="form-control frm-input" rows="5" placeholder="Mensagem" required></textarea>
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