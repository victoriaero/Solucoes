import React from 'react';
import "./index.css";

class Capa extends React.Component {
    render() {
        return (
            <div className="container-fluid capa">
                <div className="container">
                    <div className="row">
                        <div className="col-md col-sm capa-txt">
                            <h2 className="title-p">Um texto motivacional promovendo Soluções de Maria</h2>
                            <p className="txt text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Maecenas lobortis, ipsum dignissim ultricies finibus, quam erat dignissim eros, a bibendum
                            massa magna vel neque. Quisque nec erat leo. Donec pulvinar nibh in ultrices mattis. Donec ut mauris est.
                                Ut aliquam a erat sit amet varius. Cras quis sapien nec lectus accumsan iaculis eget eu massa. 
                                Sed ultrices elit a sagittis laoreet.</p>
                            <button className="btn btn-outline-light">Saiba Mais</button>
                        </div>
                        <div className="col-md col-sm">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Capa;