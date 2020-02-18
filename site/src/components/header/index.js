import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./index.css";

class Header extends React.Component {

    render() {
        return (
            <header className="main-header">
                <div className="container-fluid">
                    <nav className="navbar fixed-top">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="#">Soluções de Maria</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação"><span className="navbar-toggler-icon"></span></button>
                            </nav>
                            <nav className="navbar navbar-expand-lg justify-content-end">
                                <div className="collapse navbar-collapse">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        activeClass="active"
                                        to="capa"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Início
                                    </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        activeClass="active"
                                        to="sobre"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        Quem Somos
                                    </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        activeClass="active"
                                        to="servicos"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        Serviços
                                    </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        activeClass="active"
                                        to="contato"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        Contato
                                    </Link>
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