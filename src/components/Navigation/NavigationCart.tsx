import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import background from '../../assets/fb-background.jpg';
import venadosLogo from '../../assets/venados-logo.png';

export const NavigationCart = ():JSX.Element => {
    return (
        <React.Fragment>
            <Card>
                <div className="logo-container">
                    <img src={venadosLogo} alt="logo" className={'venados-logo'}/>
                    <h3 className="logo-title">Venados F.C.</h3>
                </div>
                <CardActionArea>
                    <CardMedia
                        component={'img'}
                        image={background}
                        height={200}
                        title={'Pasion por Football'}
                    />
                </CardActionArea>
            </Card>
            <Divider/>
        </React.Fragment>
    );
};

export default NavigationCart