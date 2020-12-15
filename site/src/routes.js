import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './views/home/capa.js';
import Validation from './views/home/contato.js';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/form" exact component={Validation} />
            </Switch>
        </BrowserRouter>
    );
}