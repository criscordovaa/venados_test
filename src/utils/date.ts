import moment from 'moment';
import 'moment/locale/es'

export type Months =
    "Enero"
    | "Febrero"
    | "Marzo"
    | "Abril"
    | "Mayo"
    | "Junio"
    | "Julio"
    | "Agosto"
    | "Septiembre"
    | "Octubre"
    | "Noviembre"
    | "Diciembre";


type format = "Y-m-d" | "Y/m/d";

export const filterByMonth = (array: Array<any>, arrayKeyItem: string, stringFilter: string): any => (
    array.filter((data) => getStringMonth(new Date(data[arrayKeyItem])).toUpperCase() === stringFilter.toUpperCase())
);
export const getStringMonth = (date: Date) => {
    return moment(date).format("MMMM");
};

export const getDay = (date: Date) => moment(date).format("D");

export const getDayWeekName = (date: Date) => moment(date).format("ddd").toString().toUpperCase();
