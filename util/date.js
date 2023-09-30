
export function DateStyle(date){
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    
}

export function recentdate(date,days){
    return new Date(date.getFullYear(),date.getMonth(),date.getDate()-days);
}