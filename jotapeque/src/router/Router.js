import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CreateImage } from '../pages/CreateImage/CreateImage'
import { Feed } from '../pages/Feed/Fedd'
import { Login } from '../pages/Login/Login'
import { SignUp } from '../pages/SignUp/SignUp'


export const Router = (props) => {
    return (
        <Switch>
            <Route exact path={['/', '/login']} >
                <Login setNickname={props.setNickname} />
            </Route>

            <Route exact path={['/', '/signup']} >
                <SignUp/>
            </Route>

            <Route exact path={'/feed'} >
                <Feed/>
            </Route>

            <Route exact path={'/image/add'} >
                <CreateImage/>
            </Route>
        </Switch>
    )
}