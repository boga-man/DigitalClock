function rClock(){

    var h = document.getElementById("hrs");
    var m = document.getElementById("min");
    var s = document.getElementById("sec");
    // var ampm = document.getElementById("ampm");
    var day = document.getElementById("day");
    var dat = document.getElementById("date");
    var mon = document.getElementById("month");

    var d = new Date();

    h.innerHTML = (d.getHours()<10)?"0"+d.getHours():d.getHours(); 
    m.innerHTML = (d.getMinutes()<10)?"0"+d.getMinutes():d.getMinutes(); 
    s.innerHTML = (d.getSeconds()<10)?"0"+d.getSeconds():d.getSeconds(); 
    

    var dayy = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var mont = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

    dat.innerHTML = d.getDate(); 
    day.innerHTML = dayy[d.getDay()]; 
    mon.innerHTML = mont[d.getMonth()]; 
    document.getElementById('format').setAttribute('mode', '24')
}

var interval = setInterval(rClock, 1000);

// button that switches into dark mode
var dark = document.getElementById("dark_mode");
dark.addEventListener('click',toggleMode);

function toggleMode(){

    var mode = dark.getAttribute('mode');

    switch(mode){
        case 'light':
            var body = document.getElementById('canvas');
            // change the background to dark and font to light
            body.style.background = '#280044';
            body.style.color = '#f1f1f1';
            document.getElementById("dark_mode").setAttribute('mode', 'dark');
            // change the icon
            document.getElementById("dark_mode").innerHTML = '<img src="https://img.icons8.com/material-sharp/30/f1f1f1/sad-sun.png"/>';
            break;
        case 'dark':
            var body = document.getElementById('canvas');
            // change the background to dark and font to light
            body.style.background = '#f1f1f1';
            body.style.color = '#280044';
            document.getElementById("dark_mode").setAttribute('mode', 'light');
            // change the icon
            document.getElementById("dark_mode").innerHTML = '<img src="https://img.icons8.com/ios-filled/30/280044/moon-man.png"/></div>';
            break;
    }
    
}

function setHours(){
    if(d.getHours()>12){
        var hrs = d.getHours() - 12;
        h.innerHTML = (d.getHours()<10)?"0"+hrs:hrs;
        ampm.innerHTML = 'PM'; 
    }
    else{
        h.innerHTML = (d.getHours()<10)?"0"+d.getHours():d.getHours();
        ampm.innerHTML = 'AM'; 

    }

    if(d.getHours() === 0){
        h.innerHTML = 12;
    }
}




