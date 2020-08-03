import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';

interface INavigationItem {
    route: string,
    routeName: string
    Icon: React.ElementType
}

const NavigationItems: React.FC<{items: Array<INavigationItem>}>= ({items}) => {
    return (
        <React.Fragment>
            <List>
                {
                    items.map(({route, routeName, Icon}, key) =>(
                        <Link to={route} key={key}>
                            <ListItem>
                                <ListItemIcon>
                                    <Icon/>
                                </ListItemIcon>
                                <ListItemText className={'route-link'} primary={routeName}/>
                            </ListItem>
                        </Link>
                    ))
                }
            </List>
        </React.Fragment>
    );
};

export default NavigationItems