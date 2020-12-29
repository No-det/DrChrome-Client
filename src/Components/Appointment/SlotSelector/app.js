export var weekdays = new Array(7);
weekdays[0] = "SUN";
weekdays[1] = "MON";
weekdays[2] = "TUE";
weekdays[3] = "WED";
weekdays[4] = "THU";
weekdays[5] = "FRI";
weekdays[6] = "SAT";

export function weekday (weekNo) {
    if (weekNo > 6)
        weekNo = weekNo - 6;
    if (weekNo < 0)
        weekNo = weekNo + 7;
    return weekdays[weekNo];
}

export function getWeek (midDate) {
    let week = new Array(7);
    var i;
    for (i = 0; i < 7; i++) {
        week[i] = new Date(midDate);
    }
    week[0].setDate(week[0].getDate() - 3);
    week[1].setDate(week[1].getDate() - 2);
    week[2].setDate(week[2].getDate() - 1);
    week[4].setDate(week[4].getDate() + 1);
    week[5].setDate(week[5].getDate() + 2);
    week[6].setDate(week[6].getDate() + 3);
    return week;
}
