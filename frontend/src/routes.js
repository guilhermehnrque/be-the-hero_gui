import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Logon}/>
            <Route path="/register" component={Register}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/incident/new" component={NewIncident}/>
        </BrowserRouter>
    )
}

export default Routes