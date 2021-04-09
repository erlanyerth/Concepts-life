import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/home'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

function App(){
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound}/>
        </Switch>
        </BrowserRouter>
    )
}
export default App