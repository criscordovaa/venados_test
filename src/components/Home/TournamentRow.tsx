import React from 'react';

enum Asenco {
    ASCENSO = 'Ascenso MX',
    COPA = 'Copa MX'
}

export interface ITournamentRow {
    local: boolean//false,
    opponent: string//"Alebrijes",
    opponent_image: string//"https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/3088/3088.png",
    datetime: Date//"2020-04-05T23:00:00+00:00",
    league: Asenco//"Ascenso MX",
    image: string//"https://venados.dacodes.mx/img/usr/9bbebb9d05c0408bae80b537debbbb20.jpg",
    home_score: number//0,
    away_score: number//0

}

const TournamentRow: React.FC<ITournamentRow> = (props) => {
    return (
        <div>

        </div>
    );
};

export default TournamentRow;
