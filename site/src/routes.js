import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Validation from './views/home/contato.js';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/form" exact component={Validation} />
            </Switch>
        </BrowserRouter>
    );
}