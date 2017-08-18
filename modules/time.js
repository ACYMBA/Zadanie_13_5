
function convertOStime(time) {
  if (time < 0 ) {
    throw new RangeError("Time should have positive value but got " + time)
  } else if (time < 60) {
    var seconds = Math.floor((time%3600)%60);
    return(seconds + ' sek.');
  } else if (time < 3600) {
    var minutes = Math.floor((time%3600)/60);
    var seconds = Math.floor((time%3600)%60);
    return(minutes + ' min. ' + seconds + ' sek.');
  } else {
    var hours = Math.floor(time/3600);
    var minutes = Math.floor((time%3600)/60);
    var seconds = Math.floor((time%3600)%60);
    return(hours + ' godz. ' + minutes + ' min. ' + seconds + ' sek.');
  }
}

exports.print = convertOStime;


