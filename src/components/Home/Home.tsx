import React, {useEffect, useState} from 'react';
import {
    Container,
    ButtonGroup,
} from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import tournamentServices, {ELeague, ITournamentResponse} from './tournamentServices';
import LogoVendados from '../../assets/venados-logo.png';
import TournamentTable, {ITournamentPeriod} from './TournamentTable'
import {filterByMonth} from 'utils/date';

import './tournament.scss';
import ToggleButton from "@material-ui/lab/ToggleButton/ToggleButton";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
                margin: 0,
                width: "100%",
                '& > *': {
                    width: "50%",
                    height: 60,
                    borderWidth: 3,
                    borderRadius: 0
                },
            },
        },
        skeleton: {
            marginTop: "30px"
        }

    }),
);

export interface ITournamentArray extends Array<ITournamentPeriod> {
}

const Home: React.FC = () => {

    const [data, setData] = useState<ITournamentArray>([
        {period: "Enero", data: []},
        {period: "Febrero", data: []},
        {period: "Marzo", data: []},
        {period: "Abril", data: []},
        {period: "Mayo", data: []},
        {period: "Junio", data: []},
        {period: "Julio", data: []},
        {period: "Agosto", data: []},
        {period: "Septiembre", data: []},
        {period: "Octubre", data: []},
        {period: "Noviembre", data: []},
        {period: "Diciembre", data: []},
    ]);
    const [tournamentType, changeTournamentType] = useState<ELeague>(ELeague.ASCENSO);
    const [isLoaded, setLoaded] = useState<boolean>(false);


    useEffect(() => {
        async function fetchData() {
            try {
                const resolve: ITournamentResponse = await tournamentServices.getGames();
                const {games} = resolve.data;
                const newData = data.map((element) => {
                    const data = filterByMonth(games, "datetime", element.period.toUpperCase());
                    return {...element, data}
                });
                setData(newData);
            } catch (e) {
                console.log(e)
            }
            setLoaded(true);
        }

        fetchData();
    }, []);

    const classes = useStyles();
    const switchData = data.map((data: ITournamentPeriod) => {
        const dataFiltered = data.data.filter((item) => item.league == tournamentType);
        return {...data, data: dataFiltered};
    });

    return (
        <Container disableGutters={true}>
            <img className={'home-logo'} src={LogoVendados} width={200} alt=""/>
            <div className={classes.root}>
                <ButtonGroup>
                    <ToggleButton disabled={!isLoaded} selected={isLoaded && tournamentType === ELeague.COPA}
                                  onClick={() => changeTournamentType(ELeague.COPA)}>copa mx</ToggleButton>
                    <ToggleButton disabled={!isLoaded} selected={isLoaded && tournamentType === ELeague.ASCENSO}
                                  onClick={() => changeTournamentType(ELeague.ASCENSO)}>ascenso mx</ToggleButton>
                </ButtonGroup>
            </div>
            {isLoaded
                ? switchData.map((item, key) =>
                    item.data.length !== 0
                        ? <TournamentTable {...item} key={key}/>
                        : ""
                )
                : (
                    <Container className={classes.skeleton}>
                        <Skeleton/>
                        <Skeleton animation={false}/>
                        <Skeleton animation="wave"/>
                        <Skeleton/>
                        <Skeleton animation={false}/>
                        <Skeleton animation="wave"/>
                        <Skeleton/>
                        <Skeleton animation={false}/>
                        <Skeleton animation="wave"/>
                        <Skeleton/>
                        <Skeleton animation={false}/>
                        <Skeleton animation="wave"/>
                    </Container>
                )
            }

        </Container>
    );
};

export default Home;
