var os = require('os');

function timeInfo(time) {
    var hour = (time / 3600).toFixed(0);
    var min = ((time % 3600) / 60).toFixed(0);
    var sek = (time % 60).toFixed(0);
    return hour + ' h ' + min + ' min ' + sek + ' sec';
}

exports.print = timeInfo;