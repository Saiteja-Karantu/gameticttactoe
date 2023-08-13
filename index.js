console.log('Welcome to Tic Tac Toe');
let music=new Audio("sound.mp3");
let turn="X";
let gameOver=false;
let final=true;
var c=0;





const changeTurn=()=>{
    return turn==="X"?"0":"X";

}

const checkWin=()=>
{
    let boxtext=document.getElementsByClassName('boxtext');
    
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && ( boxtext[e[1]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!=="" ))
        {
        document.querySelector('#info').innerText=boxtext[e[0]].innerText+" - Won";
        
       document.getElementById("imgbox").innerHTML="<img id='img'src='image.gif'<img>";
         gameOver=true;
         final=false;

        }
    });

}


let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
let boxtext=element.querySelector('.boxtext');

element.addEventListener('click',()=>{

        if(boxtext.innerText==='')
        {
             boxtext.innerText=turn;
            turn= changeTurn();
            music.play();
        if(final){
            checkWin();
            
            
        }
            if(!gameOver)
          {

          document.getElementById('info').innerText="Turn for "+turn;
          checkDraw();
        
          }
          
          
          
  
          
        }
        

     
        
    

});

});


function fun()
{
location.reload();

}
function checkDraw()
{
    Array.from(boxes).forEach(element=>{
        let boxtext=element.querySelector('.boxtext');
        if(boxtext.innerText!=='')
        {

        c++;
    
        } 
   })
   if(c==9){
    document.querySelector(".gamecontainer").remove();
    gameover();
   }
   c=0
}
function gameover()
{
var htmlbody=document.createElement('div');

htmlbody.id="main";
document.body.appendChild(htmlbody);

for(let i=1;i<=100;i++)
{
var box=document.createElement('div');
box.id=i;
box.classList.add('grids');
htmlbody.appendChild(box);
}
console.log(htmlbody);
function sleep(ms)
{
    return new Promise(resolve=>setTimeout(resolve,ms));
}
call();
async function call()
{
for(i=1;i<=50;i++)
{   
    await sleep(50);
    var first=document.getElementById(i);
    var last=document.getElementById(100-i+1);
    console.log(first,last)
    first.style.backgroundColor="black";
    last.style.backgroundColor="black";
}

for(let i=1;i<=100;i++)
{
    document.getElementById(i).remove();

}


var text=document.createTextNode('Draw-Match')

main.style.backgroundColor="black";

main.appendChild(text);


await sleep(3000);
location.reload();

}
}