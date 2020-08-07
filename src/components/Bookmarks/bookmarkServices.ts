import Request from 'utils/api';
import {AxiosResponse, AxiosError} from "axios";

const bookmarkServices = {
    getBookmarks: () =>
        new Promise<IBookmarkResponse>((resolve, reject) =>
            Request.get('statistics')
                .then((response: AxiosResponse<IBookmarkResponse>) => response.data)
                .then(resolve)
                .catch((error: AxiosError) => JSON.parse(error.request.response))
                .then(reject)
        )
};

export interface IBookmarkResponse {
    response: boolean
    data: {statistics: Array<IBookmark>}
}

export interface IBookmark {
    position: number //11,
    image: string//"https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/3111/3111.png",
    team: string//"Dorados",
    games: number//3,
    win: number//0,
    loss: number//1,
    tie: number//2,
    f_goals: number//2,
    a_goals: number//6,
    score_diff: number//-4,
    points: number//1,
    efec: any//null

}

export default bookmarkServices;