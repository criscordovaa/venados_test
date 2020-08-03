import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from '@material-ui/core/Container'


import Button from '@material-ui/core/Button'
import {hot} from 'react-hot-loader'
import Navigation from 'components/Navigation';

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
                <Container>
                </Container>
            </main>
        </div>
    );
};

export default hot(module)(App);