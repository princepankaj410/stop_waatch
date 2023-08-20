let sec=0;
let min=0;
let hours=0;
let interval;
function start(){

    document.getElementById("start").disabled = true;

    interval=setInterval(function(){

    

        sec++;
 

        
        if(sec==60){
            min++;
            sec=0;
        }
    
        if(min==60){
            hours++;
            sec=0;
            min=0;
        }
   
      
 
document.getElementById("sec").innerHTML=sec;
document.getElementById("min").innerHTML=min;
document.getElementById("hours").innerHTML=hours;



    },1000);


} 
function stop(){
    clearInterval(interval);
    document.getElementById("start").disabled =false;
}

function reset(){
    sec=0;
    min=0;
    hours=0;

    document.getElementById("sec").innerHTML=sec;
document.getElementById("min").innerHTML=min;
document.getElementById("hours").innerHTML=hours;
}




