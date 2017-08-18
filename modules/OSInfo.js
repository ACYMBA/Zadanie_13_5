var os = require('os');
var colors = require('colors');
var time = require('./time');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.green , type);
    console.log('Release:'.red , release);
    console.log('CPU model:'.yellow , cpu);
    console.log('Uptime: ~'.cyan , (uptime / 60).toFixed(0), 'min');
    console.log('Uptime: '.red , time.print(125));
    console.log('Uptime: '.gray, time.print(3700));
    console.log('User name:'.blue, userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}
exports.print = getOSinfo;