var sp,start,stop,t,ms,s,min,h;
window.onload=function(){
    sp=document.getElementsByTagName("span");
    start=document.getElementById("start");
    stop=document.getElementById("stop");
    reset=document.getElementById("reset");
    t,
    ms=0,s=0,min=0,h=0;
}
// mettre en place le compteur 
function update_chrono(){
    ms+=1;
    if(ms==10){
        ms=1;
        s+=1;
    }
    if(s==60){
        s=0;
        min+=1;
    }
    if(min==60){
        min=0;
        h+=1;
    }

    // insertion des valeurs dans les spans
sp[0].innerHTML=h+"h";
sp[1].innerHTML=min+"min";
sp[2].innerHTML=s+"s";
sp[3].innerHTML=ms+"ms";
}
function start_btn(){
    t=setInterval(update_chrono,100);
    start.disabled=true
}
function stop_btn(){
    clearInterval(t);
    start.disabled=false;
}
function reset_btn(){
    clearInterval(t);
    start.disabled=false;
    min=0 , s=0, h=0, ms=0;

sp[0].innerHTML=h+"h";
sp[1].innerHTML=min+"min";
sp[2].innerHTML=s+"s";
sp[3].innerHTML=ms+"ms"
}
reset.addEventListener("click",()=>{
    reset_btn();
})

var anim=document.getElementById("anim");
var nam="start";
var i=0,c=nam.length;

  if(i<=c){
    
  i+=nam.length
  }
   
  