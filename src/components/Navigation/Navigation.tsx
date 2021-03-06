import React, {useState} from 'react';
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import NavigationItems from './NavigationItems'
import NavigationCart from './NavigationCart';
import {Group, Equalizer, Home} from '@material-ui/icons';
import {NavigationProvider} from './hooks/NavigationContext';

//All Items for navigation
export const navItems = [
    {route: "/", routeName: "Inicio", Icon: Home},
    {route: "/players", routeName: "Jugadores", Icon: Group},
    {route: "/bookmarks", routeName: "Estadisticas", Icon: Equalizer}
];

const navBarStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        toolbar: {
            paddingRight: 24,
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            flexGrow: 1
        }
    })
);

const NavigationBar: React.FC = () => {
    const [isOpen, toggleOpen] = useState(false);
    const classes = navBarStyles();
    const toggleNav = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event && event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key == 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) return;
        toggleOpen(open)
    };
    return (
        <React.Fragment>
            <AppBar position={"absolute"} color={"transparent"} className={classes.appBar}>
                <ToolBar className={classes.toolbar}>
                    <IconButton
                        edge={"start"}
                        className={classes.menuButton}
                        color={"inherit"}
                        arial-label={"menu"}
                        onClick={toggleNav(true)}
                    >
                        <MenuIcon/>
                    </IconButton>
                </ToolBar>
            </AppBar>
            <SwipeableDrawer
                className={'test'}
                anchor={'left'}
                open={isOpen}
                onOpen={toggleNav(true)}
                onClose={toggleNav(false)}
            >
                <NavigationCart/>
                <NavigationProvider value={{itemsNavigation: navItems, fnToggleNav: toggleNav}}>
                    <NavigationItems/>
                </NavigationProvider>
            </SwipeableDrawer>
        </React.Fragment>
    );
};

export default NavigationBar;