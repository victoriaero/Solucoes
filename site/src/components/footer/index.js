import React from 'react';
import "./index.css";

class Footer extends React.Component {
    render() {
        return(

            <footer className="page-footer">
                <div className="container-fluid footer-topo">
                    <p>
                        Nos siga nas redes
                        <a href="#"><i className="fab icone-redes fa-instagram fa-lg"></i></a>
                        <a href="#"><i className="fab icone-redes fa-facebook-f fa-lg"></i></a>
                        <a href="#"><i className="fab icone-redes fa-twitter fa-lg"></i></a>
                    </p>
                </div>
                <div className="container-fluid footer-base">
                    <p className="txt">&copy; 2020 Soluções de Maria</p>
                </div>
            </footer>
        );
    }
}

export default Footer;