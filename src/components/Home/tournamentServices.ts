import Request from 'utils/api';
import {AxiosError, AxiosResponse} from "axios";

const tournamentServices = {
    getGames: () =>
        new Promise<ITournamentResponse>((resolve, reject) =>
            Request.get('games')
                .then((response: AxiosResponse<ITournamentResponse>) => response.data)
                .then(resolve)
                .catch((error: AxiosError) => JSON.parse(error.request.response))
                .then(reject)
        ),
};

export enum ELeague {
    ASCENSO = 'Ascenso MX',
    COPA = 'Copa MX'
}

export interface ITournamentResponse {
    response: boolean,
    data: { games: Array<ITournament> }
}

export interface ITournament {
    local: boolean//false,
    opponent: string//"Alebrijes",
    opponent_image: string//"https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/3088/3088.png",
    datetime: Date//"2020-04-05T23:00:00+00:00",
    league: ELeague//"Ascenso MX",
    image: string//"https://venados.dacodes.mx/img/usr/9bbebb9d05c0408bae80b537debbbb20.jpg",
    home_score: number//0,
    away_score: number//0
}

export default tournamentServices;