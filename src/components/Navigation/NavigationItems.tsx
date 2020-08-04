import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';

import {NavigationConsumer} from "./hooks/NavigationContext";


export interface INavigationItem {
    route: string,
    routeName: string
    Icon: React.ElementType
}

const NavigationItems: React.FC = () => {
    return (
        <NavigationConsumer>
            {
                navContext => navContext && (
                    <List>
                        {
                            navContext.itemsNavigation.map(({route, routeName, Icon}, key) => (
                                <Link className={'route-link'} to={route} key={key} onClick={navContext.fnToggleNav(false)}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Icon/>
                                        </ListItemIcon>
                                        <ListItemText primary={routeName}/>
                                    </ListItem>
                                </Link>
                            ))
                        }
                    </List>

                )
            }
        </NavigationConsumer>
    );
};

export default NavigationItems