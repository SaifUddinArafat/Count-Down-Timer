function getRemaning_Time(){
    var endTime = Date.parse('Mar 16, 2022');
    var current_Time = Date.now();
    var remaning_Time = endTime - current_Time;

    var second = 1000;
    var min = second * 60;
    var hr = min * 60;
    var day = hr * 24;
    
    var remaning_Day = Math.floor(remaning_Time / day);
    var remaning_Hr = Math.floor((remaning_Time % day) / hr);
    var remaning_Min = Math.floor((remaning_Time % hr) / min);
    var remaning_Second = Math.floor((remaning_Time % min) / second);

    document.getElementById("remaningDay").innerHTML = remaning_Day;
    document.getElementById("remaningHr").innerHTML = remaning_Hr;
    document.getElementById("remaningMin").innerHTML = remaning_Min;
    document.getElementById("remaningSec").innerHTML = remaning_Second;

}

setInterval(getRemaning_Time, 1000);