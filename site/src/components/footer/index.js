import React from 'react';
import "./index.css";

class Footer extends React.Component {
    render() {
        return(
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 redes">
                            <p className="txt info-txt">
                                Nos siga nas redes
                                <a href="#"><i class="fab icone-redes fa-instagram fa-lg"></i></a>
                                <a href="#"><i class="fab icone-redes fa-facebook-f fa-lg"></i></a>
                                <a href="#"><i class="fab icone-redes fa-twitter fa-lg"></i></a>
                            </p>  
                        </div>
                        <div className="col-md-6">
                            <p>&copy; 2020 Soluções de Maria</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;