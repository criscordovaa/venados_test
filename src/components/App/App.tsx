import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Switch, Route} from "react-router-dom";


import {hot} from 'react-hot-loader'
import Navigation from 'components/Navigation';
import HomePage from 'components/Home';
import PlayersPage from "components/Players";
import BookmarksPage from 'components/Bookmarks';


import './app.scss';

const useStyle = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar
}));
const App: React.FC = () => {
    const classes = useStyle();
    return (
        <div>
            <CssBaseline/>
            <Navigation/>
            <main className={'content-application'}>
                <div className={classes.appBarSpacer} />
                <Switch>
                    <Route
                        exact
                        path={'/'}
                        component={HomePage}
                        key={'home'}
                    />
                    <Route
                        exact
                        path={'/bookmarks'}
                        component={BookmarksPage}
                        key={'bookmark'}
                    />
                    <Route
                        exact
                        path={'/players'}
                        component={PlayersPage}
                        key={'player'}
                    />
                </Switch>
            </main>
        </div>
    );
};

export default hot(module)(App);