var os = require('os');

function timeInfo() {
    var uptime = os.uptime();
    var hour = (uptime / 3600).toFixed(0);
    var min = ((uptime % 3600) / 60).toFixed(0);
    var sek = ((uptime % 3600) % 60).toFixed(0);
    console.log('Uptime:~', hour, 'h', min, 'min', sek, 'sec');
}

exports.print = timeInfo;