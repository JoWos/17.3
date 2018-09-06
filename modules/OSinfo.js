var os = require('os');
var colors = require('colors');
var timeInfo = require('./timeinfo');

function getOSinfo() {
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var userInfo = os.userInfo();
    var uptime = os.uptime();
    console.log('System:'.rainbow, type);
    console.log('Release:'.magenta, release);
    console.log('CPU model:'.blue, cpu);
    console.log('Uptime:~'.green, timeInfo.print(uptime));
    console.log('User name:'.cyan, userInfo.username);
    console.log('Home dir:'.yellow, userInfo.homedir);
}

exports.print = getOSinfo;