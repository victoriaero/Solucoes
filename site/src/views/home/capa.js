import React from 'react';
import "./index.css";

class Capa extends React.Component {
    render() {
        return (
            <section id="capa">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xs-12 capa-txt">
                            <h2 className="title">Soluções personalizadas de alto impacto para o seu negócio</h2>
                            <p className="txt text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Maecenas lobortis, ipsum dignissim ultricies finibus, quam erat dignissim eros, a bibendum
                            massa magna vel neque.</p>
                        </div>
                        <div className="col-md-6  d-none d-sm-block">
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    
}

export default Capa;