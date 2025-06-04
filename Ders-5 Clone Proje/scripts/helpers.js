import { month_tr } from "./contants.js";

export const getDate =()=>{
    const date = new Date();
    const day = date.getDate();
    const monthIndex = date.getMonth();

    return day + " " + month_tr[monthIndex] ;
}