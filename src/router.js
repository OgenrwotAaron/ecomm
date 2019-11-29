import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/home';
import Layout from './HOC/Layout/layout';

const Router = () => {
    return ( 
        <Layout>
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
        </Layout>   
     );
}
 
export default Router;