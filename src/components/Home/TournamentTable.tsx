import React from 'react';
import {Months} from 'utils/date';
import TournamentRow,{ITournamentRow} from "./TournamentRow";


export interface ITournamentTable {
    month: Months
    tournamentData: Array<ITournamentRow>
}

const TournamentTable: React.FC<ITournamentTable> = (props) => {
    const {month} = props;
    return (
        <React.Fragment>
            <div className="tournament-header">{month}</div>
            {/*<TournamentRow/>*/}
        </React.Fragment>
    );
};

export default TournamentTable;
