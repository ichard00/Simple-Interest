function calculate(){
    var p = 0;
    var n = 0;
    var r = 0;
    var si = 0;
    p = document.getElementById("Principal").value;
    n = document.getElementById("Years").value;
    r = document.getElementById("rate").value;
    si =  (p*n*r)/100;
    document.getElementById("res").innerHTML = si;
}