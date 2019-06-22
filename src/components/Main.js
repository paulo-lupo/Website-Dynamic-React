import React from 'react';
import HomePage from "./HomePage";
import { Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import Resume from './Resume';
import Links from './Links';


const Main =  () => (
    <Switch>
        <Route exact path="/" component={ HomePage }/>
        <Route path="/Projects" component={ Projects }/>
        <Route path="/Resume" component={ Resume }/>
        <Route path="/Links" component={ Links }/>
    </Switch>
)

export default Main;