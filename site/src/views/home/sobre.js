import React from 'react';
import "./index.css";
import Imagem from "../../images/sobre.png";

class Sobre extends React.Component {
    render() {
        return(
            <section id="sobre">
                <div className="container-fluid sobre">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5 d-none d-sm-block">
                            <img className="img-sobre img-fluid" alt="Sobre" src={Imagem}/>
                        </div>
                        <div className="col-md-5 col-xs-6 sobre-txt">
                            <h2 className="title">Uma empresa especializada em renovar o seu negócio</h2>
                            <p className="txt text-justify">Morbi quam velit, 
                            tincidunt non finibus et, malesuada at orci. 
                            Aenean ultrices rhoncus porta. Vestibulum vel varius sapien. 
                            Morbi at nisl at mi vestibulum sodales. Duis ante nibh, 
                            suscipit quis ligula ut, faucibus luctus ligula. Nam in mollis velit. 
                            Fusce maximus, neque ultrices tristique interdum, eros lorem semper purus, 
                            sit amet maximus massa eros et nisi. </p>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Sobre;