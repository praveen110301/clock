
function ColorChanging(hours) {
    if (hours >= 1 && hours < 6) {
        document.body.style.background = "black" //raat
    }
    else if (hours >= 6 && hours < 8) {
        document.body.style.background = "#7CB9E8 "// early morning sky blue aero
    }
    else if (hours >= 8 && hours < 12) {
        document.body.style.background = " #FFE87C" // hlki dhoop
    }
    else if (hours >= 12 && hours < 16) {
        document.body.style.background = "#FDB813" // tez dhoop
    }

    else if (hours >= 16 && hours < 18) {
        document.body.style.background = "#F28C38" //shaam
    }
    else if (hours >= 18 && hours <= 24) {
        document.body.style.background = "black"//raat
    }
}

function timeWithoutSingleDigit(hours, minutes, seconds) {
    if (seconds / 10 < 1) {
        seconds = "0" + seconds
    }
    if (minutes / 10 < 1) {
        minutes = "0" + minutes
    }
    if (hours / 10 < 1) {
        hours = "0" + hours
    }

}
const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]

function time1() {
    var d = new Date();
    // console.log(d)
    var hours = d.getHours()
    var minutes = d.getMinutes()
    var seconds = d.getSeconds()
    var date = d.getDate()
    var month = d.getMonth()
    var year = d.getFullYear()
    var day = d.getDay()
    var session = document.getElementById("sess")

    // hours=23

    //Adding zero ahead of single digit
    if (seconds / 10 < 1) {
        seconds = "0" + seconds
    }
    if (minutes / 10 < 1) {
        minutes = "0" + minutes
    }
    if (hours / 10 < 1) {
        hours = "0" + hours
    }
    if (date / 10 < 1) {
        date = "0" + date
    }
    if (month / 10 < 1) {
        month = "0" + month
    }


    // timeWithoutSingleDigit(hours, minutes, seconds)
    ColorChanging(hours)

    // if (hours > 12) {
    // session.innerHTML = "PM";
    if (isTwelveHrFormatSelected) {

        session.style.display = "block"
        if (hours >= 12) {
            session.innerHTML = "PM";
        }
        if (hours > 12) {
            hours = hours - 12;
            if (hours / 10 < 1) {
                hours = "0" + hours
            }
        }

    }
    else {
        session.style.display = "none"
    }

    // }
    // session.style.display = "none"

    document.getElementById("hrs").innerHTML = hours
    document.getElementById("mins").innerHTML = minutes
    document.getElementById("secs").innerHTML = seconds
    document.getElementById("tareek").innerHTML = date
    document.getElementById("mahina").innerHTML = month
    document.getElementById("saal").innerHTML = year
    document.getElementById("din").innerHTML = weekday[day]
    // document.getElementById("date").innerHTML =`${date} ${month} ${year} (${day})`


}


var isTwelveHrFormatSelected = false;

function run(value) {
    console.log("before: ", isTwelveHrFormatSelected)
    isTwelveHrFormatSelected = value
    console.log("After:", isTwelveHrFormatSelected)

}

// setInterval(time1(), 100)
setInterval(() => {
    time1()
}, 1000)
