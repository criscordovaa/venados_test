import React, {useState, useEffect} from 'react';
import {Container, Dialog, DialogContent, DialogTitle} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import playerServices, {IPlayer, ITeam} from './playerServices';
import {PlayerProvider, PlayerConsumer} from "./hooks/PlayerContext";

import PlayerModal from './PlayerModal';
import './player.scss';
import {getDateFormatted} from "utils/date";


const Players = () => {
    const [data, setData] = useState<ITeam>({
        forwards: [],
        centers: [],
        defenses: [],
        goalkeepers: [],
        coaches: []
    });
    const [isLoaded, setLoaded] = useState<boolean>(false);
    const [player, setPlayer] = useState<IPlayer>({
        name:'',
        first_surname:'',
        second_surname:'',
        birthday:'',
        birth_place:'',
        weight:null,
        height:null,
        position:'',
        number:null,
        position_short:'',
        last_team:'',
        image:'',
    });
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const resolve = await playerServices.getPlayers();
                const {team} = resolve.data;
                setData({...team});
            } catch (e) {
                console.log(e);
            }
            setLoaded(true);
        }

        fetchData();
    }, []);
    const {forwards, goalkeepers, defenses, centers} = data;
    return (
        <PlayerProvider value={{setOpen: setOpen, player: player, open: open, setPlayer: setPlayer}}>
            <Container disableGutters={true}>
                <div className="player-container">
                    {isLoaded
                        ? forwards.map((player, key) => <RenderPlayerCard {...player} key={`${player.number}${key}`}/>)
                        : <RenderSkeleton/>
                    }
                    {isLoaded
                        ? centers.map((player, key) => <RenderPlayerCard {...player} key={`${player.number}${key}`}/>)
                        : <RenderSkeleton/>
                    }
                    {isLoaded
                        ? defenses.map((player, key) => <RenderPlayerCard {...player} key={`${player.number}${key}`}/>)
                        : <RenderSkeleton/>
                    }
                    {isLoaded
                        ? goalkeepers.map((player, key) => <RenderPlayerCard {...player} key={`${player.number}${key}`}/>)
                        : <RenderSkeleton/>
                    }
                </div>
                <PlayerModal/>
            </Container>
        </PlayerProvider>
    );
};

const RenderPlayerCard: React.FC<IPlayer> = (props, key) => {
    const {name, image, first_surname, position} = props;
    return (
        <React.Fragment>
            <PlayerConsumer>
                {
                    playerContext => playerContext && (
                        <div
                            className="player-card"
                            key={`${first_surname.toLowerCase()}${name.toLowerCase()}${key}`}
                            onClick={() => {
                                playerContext.setPlayer(props);
                                playerContext.setOpen(true)
                            }}
                        >
                            <div className="image-container">
                                <img src={image} alt=""/>
                            </div>
                            <span className="card-text position">{position}</span>
                            <span className="card-text">{name} {first_surname}</span>
                        </div>
                    )
                }
            </PlayerConsumer>
        </React.Fragment>
    )
};

const RenderSkeleton: React.FC = () => (
    <React.Fragment>
        <div className="player-card">
            <Skeleton animation={'wave'} variant="circle" width={60} height={60}/>
            <Skeleton animation={false} variant="text" component={'span'} className={'skeleton'}/>
            <Skeleton variant="text" component={'span'} className={'skeleton'}/>
        </div>
        <div className="player-card">
            <Skeleton animation={'wave'} variant="circle" width={60} height={60}/>
            <Skeleton animation={false} variant="text" component={'span'} className={'skeleton'}/>
            <Skeleton variant="text" component={'span'} className={'skeleton'}/>
        </div>
        <div className="player-card">
            <Skeleton animation={'wave'} variant="circle" width={60} height={60}/>
            <Skeleton animation={false} variant="text" component={'span'} className={'skeleton'}/>
            <Skeleton variant="text" component={'span'} className={'skeleton'}/>
        </div>
    </React.Fragment>
);

export default Players;
