import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./index.css";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          collapseOpen: false,
          color: "navbar-transparent"
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.changeColor);
    }
    
    componentWillUnmount() {
        window.removeEventListener("scroll", this.changeColor);
    }

    changeColor = () => {
        if (
          document.documentElement.scrollTop > 599 ||
          document.body.scrollTop > 599
        ) {
          this.setState({
            class: 'navbar-light shadow-sm'
          });
        } else if (
          document.documentElement.scrollTop < 600 ||
          document.body.scrollTop < 600
        ) {
          this.setState({
            class: "navbar-transparent"
          });
        }
    };

    render() {
        return (
            <header className="main-header">
                <div className="container-fluid">
                    <nav className={"navbar fixed-top " + this.state.class}>
                        <div className="container">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="#">Soluções de Maria</a>
                            </nav>
                            <nav className="navbar navbar-expand-lg justify-content-end d-none d-sm-block">
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