import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import PostPage from '../pages/PostPage/PostPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Header from '../components/Header/Header'


export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path={'/login'}>
                    <LoginPage />
                </Route>

                <Route exact path={'/'}>
                    <FeedPage />
                </Route>

                <Route exact path={'/detalhes/:id'}>
                    <PostPage />
                </Route>

                <Route exact path={'/cadastro'}>
                    <SignUpPage />
                </Route>

                <Route exact path={''}>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}