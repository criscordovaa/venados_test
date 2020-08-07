import React, {useState, useEffect} from 'react';
import {Container} from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';
import bookmarkServices, {IBookmark} from "components/Bookmarks/bookmarkServices";
import './bookmark.scss';

export interface IBookmarkArray extends Array<IBookmark> {
}

const Bookmarks = () => {
    const [data, setData] = useState<IBookmarkArray>([]);
    const [isLoaded, setLoaded] = useState<boolean>(false);
    useEffect(() => {
        async function fetchData() {
            try {
                const resolve = await bookmarkServices.getBookmarks();
                const {statistics} = resolve.data;
                setData(statistics);
            } catch (e) {
                console.log(e);
            }
            setLoaded(true);
        }
        fetchData();
    }, []);
    return (
        <Container disableGutters={true}>
            <div className="table">
                <div className="table-header">
                    <div className="table-row">
                        <div className="table-th"><span>Tabla General</span></div>
                        <div className="table-th"><span>JJ</span></div>
                        <div className="table-th"><span>DG</span></div>
                        <div className="table-th"><span>PTS</span></div>
                    </div>
                </div>
                {isLoaded
                    ? (
                        <div className="table-body">
                            {data.map((row, key) => {
                                const {team, position, image, points, games, score_diff} = row;
                                return (
                                    <div className="table-row" key={key}>
                                        <div className="table-data">
                                            <div className={"general-content"}>
                                                <span>{position}</span>
                                                <img src={image} alt=""/>
                                                <span>{team}</span>
                                            </div>
                                        </div>
                                        <div className="table-data"><span>{games}</span></div>
                                        <div className="table-data"><span>{score_diff}</span></div>
                                        <div className="table-data"><span>{points}</span></div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                    : (
                    <React.Fragment>
                        <Skeleton/>
                        <Skeleton animation={false} height={56}/>
                        <Skeleton animation="wave"/>
                        <Skeleton/>
                        <Skeleton animation={false}/>
                        <Skeleton animation="wave" height={80}/>
                        <Skeleton/>
                        <Skeleton animation={false}/>
                        <Skeleton animation="wave"/>
                        <Skeleton height={20}/>
                        <Skeleton animation={false}/>
                        <Skeleton animation="wave"/>
                    </React.Fragment>
                    )
                }
            </div>
        </Container>
    );
};

export default Bookmarks;
