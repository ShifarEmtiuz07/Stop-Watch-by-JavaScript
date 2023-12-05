const timer=document.querySelector(".time");
const start=document.querySelector(".start");
const pause=document.querySelector(".pause");
const reset=document.querySelector(".reset");
let t=null;
let [milisec,sec,min,hour]=[0,0,0,0];


start.addEventListener("click",startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);

function pauseTimer()
{
    clearInterval(t);
}

function resetTimer()
{
    clearInterval(t);
    [milisec,sec,min,hour]=[0,0,0,0];
    timer.innerHTML='00 : 00 : 00 : 000';

}
function startTimer(){
    if(t !== null)
    {
        clearInterval(t);
    }
    t=setInterval(displayTime,10);


}



function displayTime()
{
    milisec+=10;
    if(milisec==1000)
    {
        milisec=0;
        sec++;

        if(sec==60)
        {
            sec=0;
            min++;

            if(min=60)
            {
                min=0;
                hour++;
            }
        }


    }


let h=hour<10? "0" + hour: hour;
let m=min<10? "0"+min:min;
let s=sec<10?"0"+sec:sec;
let ms=milisec<10?"0"+milisec: milisec<100? "0"+milisec:milisec;
timer.innerHTML= `${h} : ${m} : ${s} : ${ms}`;

}








