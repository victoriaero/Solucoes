import React from 'react';
import "./index.css";
import Imagem from "../../images/sobre_2.png";

class Sobre extends React.Component {
    render() {
        return(
            <div className="container-fluid sobre">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5 col-sm-6">
                        <img className="img-sobre img-fluid" src={Imagem}/>
                    </div>
                    <div className="col-md-5 col-sm-6 sobre-txt">
                        <h2 className="title-p">Quem somos</h2>
                        <p className="txt">Morbi quam velit, 
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
        );
    }
}

export default Sobre;