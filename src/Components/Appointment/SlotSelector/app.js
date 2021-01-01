var weekdays = new Array(7);
weekdays[0] = "SUN";
weekdays[1] = "MON";
weekdays[2] = "TUE";
weekdays[3] = "WED";
weekdays[4] = "THU";
weekdays[5] = "FRI";
weekdays[6] = "SAT";

export var getMonth = new Array(12);
getMonth[0] = "January";
getMonth[1] = "February";
getMonth[2] = "March";
getMonth[3] = "April";
getMonth[4] = "May";
getMonth[5] = "June";
getMonth[6] = "July";
getMonth[7] = "August";
getMonth[8] = "September";
getMonth[9] = "October";
getMonth[10] = "November";
getMonth[11] = "December";

export function weekday (weekNo) {
    if (weekNo > 6)
        weekNo = weekNo - 6;
    if (weekNo < 0)
        weekNo = weekNo + 7;
    return weekdays[weekNo];
}

export function getWeek () {
    let week = new Array(7);
    let today = new Date();
    var i;
    for (i = 0; i < 7; i++) {
        week[i] = new Date();
        week[i].setDate(today.getDate() + i);
    }
    return week;
}
