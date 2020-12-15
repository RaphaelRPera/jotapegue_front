import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login } from '../pages/Login/Login'
import { SignUp } from '../pages/SignUp/SignUp'


export const Router = () => {
    return (
        <Switch>
            <Route exact path={['/', '/login']} >
                <Login/>
            </Route>

            <Route exact path={'/signup'} >
                <SignUp/>
            </Route>
        </Switch>
    )
}