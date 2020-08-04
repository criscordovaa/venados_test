import React, {useEffect, useState} from 'react';
import {
    Container,
    Button,
    ButtonGroup
} from "@material-ui/core";
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import tournamentServices from './tournamentServices';

import LogoVendados from '../../assets/venados-logo.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
                margin: theme.spacing(1),
                width: "100%",
                '& > *': {
                    width: "50%",
                    height: 60,
                    borderWidth: 3,
                    borderRadius: 0
                },
            },
        },

    }),
);

const Home: React.FC = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const asyncFetch = async () => {
            const data: any = await tournamentServices.getGames();
            setData(data);
        };

        asyncFetch();
        console.log("effect");
        // const data = await tournamentServices()
    }, []);

    const classes = useStyles();
    return (
        <Container disableGutters={true}>
            <img className={'home-logo'} src={LogoVendados} width={200} alt=""/>
            <div className={classes.root}>
                <ButtonGroup>
                    <Button>copa mx</Button>
                    <Button>ascenso mx</Button>
                </ButtonGroup>
            </div>
        </Container>
    );
};

export default Home;
