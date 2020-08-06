import React from 'react';
import {ITournament} from "components/Home/tournamentServices";
import {getDay, getDayWeekName, Months} from "utils/date";
import {Event} from "@material-ui/icons";
import venadosLogo from '../../assets/venados-logo.png';


export interface ITournamentPeriod {
    period: Months,
    data: Array<ITournament>
}

interface ITeams {
    name: string
    image: any
    flex: string
}

const TournamentTable: React.FC<ITournamentPeriod> = (props) => {
    const {period, data} = props;
    return (
        <div className={`${data.length !== 0 ? "tournament-container" : ""}`}>
            <div className={'tournament-header'}><h3>{period}</h3></div>
            {data.map((tournament, key) => {
                const {local, datetime, home_score, away_score} = tournament;
                    return (
                        <div className={"tournament-body"} key={key}>
                            <div className={"tournament-date flex-1"}>
                                <span className={'center'}><Event/></span>
                                <span className={'center'}>{getDay(new Date(datetime))}</span>
                                <span>{getDayWeekName(new Date(datetime))}</span>
                            </div>
                            <Teams {...tournament}>
                                <div className={"tournament-marker flex-3"}>
                                    <span>{(local) ? `${home_score}-${away_score}` : `${away_score}-${home_score}`}</span>
                                </div>
                            </Teams>
                        </div>
                    );
                }
            )}
        </div>
    );
};

const Teams: React.FC<ITournament> = ({local, children, opponent, opponent_image}) => {
    const array: Array<ITeams> = [];
    if (local) {
        array.push({name: "Venados", image: venadosLogo, flex: "flex-2"});
        array.push({name: opponent, image: opponent_image, flex: "flex-4"});
    } else {
        array.push({name: opponent, image: opponent_image, flex: "flex-2"});
        array.push({name: "Venados", image: venadosLogo, flex: "flex-4"});
    }
    return (
        <React.Fragment>
            {array.map(({name, image, flex}, key) => {
                let render: Array<any> = [];
                render.push(
                    <div key={key} className={`tournament-img ${flex}`}>
                        <img src={image} alt=""/>
                        <span className={"name"}>{name}</span>
                    </div>);

                if (key == 0) {
                    render.push(children);
                }

                return render;
            })}
        </React.Fragment>
    )

};

export default TournamentTable;