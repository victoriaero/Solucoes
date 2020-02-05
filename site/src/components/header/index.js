import React from "react";
import "./index.css";

class Header extends React.Component {
    render() {
        return (
            <header className="main-header">
                <div className="container-fluid">
                    <nav className="navbar">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="#">Soluções de Maria</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação"><span className="navbar-toggler-icon"></span></button>
                            </nav>
                            <nav className="navbar navbar-expand-lg justify-content-end">
                                <div className="collapse navbar-collapse">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Quem somos</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Serviços</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Contato</a>
                                    </li>
                                </ul>
                                </div>
                            </nav>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;