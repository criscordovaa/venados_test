import {AxiosResponse, AxiosError} from 'axios';
import Request from 'utils/api';

const playerServices = {
    getPlayers: () =>
        new Promise<IPlayerResponse>((resolve, reject) =>
            Request.get('players')
                .then((response: AxiosResponse<IPlayerResponse>) => response.data)
                .then(resolve)
                .catch((error: AxiosError) => JSON.parse(error.request.response))
                .then(reject)
        ),
};

export interface IPlayerResponse {
    response: boolean
    data: { team: ITeam }
}

export interface ITeam {
    forwards: Array<IPlayer>
    centers: Array<IPlayer>
    defenses: Array<IPlayer>
    goalkeepers: Array<IPlayer>
    coaches: Array<ICoach>
}

export interface IPlayer {
    name: string//"Valtencir",
    first_surname: string//"Gomes",
    second_surname: string//"Da Silva",
    birthday: Date | string//"1969-12-26T00:00:00+00:00",
    birth_place: string//"Sao Paulo, Brasil",
    weight: number | null//null,
    height: number | null//null,
    position: string//"Portero",
    number: number | null//1,
    position_short: string//"POR",
    last_team: string//"Venados FC",
    image: string//"https://venados.dacodes.mx/img/usr/11cf9270068c47119842f812ae933f78.jpg"
}

export interface ICoach {
    name: string//"Valtencir",
    first_surname: string//"Gomes",
    second_surname: string//"Da Silva",
    birthday: Date//"1969-12-26T00:00:00+00:00",
    birth_place: string//"Sao Paulo, Brasil",
    weight: number | null//null,
    height: number | null//null,
    role: string//"Auxiliar Técnico",
    role_short: string //"AUX",
    image: string//"https://venados.dacodes.mx/img/usr/11cf9270068c47119842f812ae933f78.jpg"
}

export default playerServices;