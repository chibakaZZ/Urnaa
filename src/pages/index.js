import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home';
import Products from './Products';

export default () => (
    <BrowserRouter>
        <Route path="/" component={Home} />
        <Route path="/products" component={Products} />
    </BrowserRouter>
);