import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';

// Rotas para os componetenes
import Introducao from './components/Introducao';
import CumulativeFlow from './components/CumulativeFlow';

export const routes = <Layout>
    <Route exact path='/' component={Introducao} />
    <Route exact path='/cfd' component={CumulativeFlow} />
</Layout>;
