import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Switch, Route} from "react-router-dom";


import {hot} from 'react-hot-loader'
import Navigation from 'components/Navigation';
import HomePage from 'components/Home';
import PlayersPage from "components/Players";
import BookmarksPage from 'components/Bookmarks';
import SponsorsPage from 'components/Sponsors';


import './app.scss';

const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));
const App: React.FC = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Navigation/>
            <main className={classes.content}>
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
                    <Route
                        exact
                        path={'/sponsors'}
                        component={SponsorsPage}
                        key={'sponsor'}
                    />
                </Switch>
            </main>
        </div>
    );
};

export default hot(module)(App);