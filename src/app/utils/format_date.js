export const formatDate = (date) => {
    let monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
    ];

    let newDate = new Date(date);
    let day = newDate.getDate();
    let monthIndex = newDate.getMonth();
    let year = newDate.getFullYear();
    return day.toString().concat("-", monthNames[monthIndex], "-", year.toString());
};
