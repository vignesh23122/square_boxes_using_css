function colorchange() {
    var clr='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
    var lst='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
    
    document.getElementById("purp").style.background=clr;
    document.getElementById("brb").style.background=lst;
    console.log(clr,lst);

}