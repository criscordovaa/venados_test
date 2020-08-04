import Request from 'utils/api';
import {AxiosError, AxiosResponse} from "axios";

const tournamentServices = {
    getGames: () =>
        new Promise((resolve, reject) =>
            Request.get('games')
                .then((response: AxiosResponse) => response.data)
                .then(resolve)
                .catch((error: AxiosError) => JSON.parse(error.request.response))
                .then(reject)
        ),
};

export default tournamentServices;