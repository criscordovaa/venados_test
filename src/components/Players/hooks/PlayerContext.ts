import React from 'react';
import {IPlayer} from "components/Players/playerServices";

export interface IPlayerContext {
    setOpen: Function
    setPlayer: Function
    player: IPlayer
    open: boolean
}

const context = React.createContext({} as IPlayerContext);

export const PlayerProvider = context.Provider;
export const PlayerConsumer = context.Consumer;