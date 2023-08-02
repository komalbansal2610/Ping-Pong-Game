  //   // Game logic
  //   const userrod = document.getElementById('userrod');
  //   const airod = document.getElementById('airod');
  //   const scorecard=document.getElementById('game-box');
  //   const ball=document.getElementById('ball');
  //   const gameboxWidth = scorecard.offsetWidth;
  //   let Vx=-2;
  //   let Vy=-3;
  //   let V=Math.sqrt(Math.pow(Vx,2)+Math.pow(Vy,2));

  //   let score,maxScore,maxScoreName,ballSpeedX=2,ballSpeedY=2;
  //   let gameOn=false;

  //   function handleKeyPress(event) {
  //     if (event.key === 'Enter') {
  //         startNewRound();
  //     }
  
  //     // Move rods horizontally with 'a' and 'd' keys
  //     if (event.key === 'a' || event.key === 'd') { 
  //       moveRods(event.key);  
  //     }
  //   }

  //   function startNewRound() {
  //     score = 0;

  //     // Retrieve the highest score from local storage
  //     maxScore = localStorage.getItem(maxScore);
  //     maxScoreName=localStorage.getItem(maxScoreName);

  //     if (maxScore) {
  //       // scorecard alert with highest scorer's name and score
  //       alert(`Highest Score: ${maxScoreName} - ${maxScore}`);
  //     } else {
  //       // Indicate it's the first time playing
  //       alert('This is your first time  you are playing this game');
  //     }
  //     resetBoard();
  //     moveBall();
  //   }

  //   function resetBoard()
  //   {
  //     ball.style.left="50%";
  //     ball.style.top="50%";
   
  //     // Reset rods position to center
  //     const initialPosition = gameboxWidth / 2;
  //     airod.style.left = initialPosition - airod.offsetWidth / 2 + 'px';
  //     userrod.style.left = initialPosition - userrod.offsetWidth / 2 + 'px';
      
  //     score=0;
  //     gameOn=false;
  //   }

  //   function storeWin(rod,score)
  //   {
  //     if(score>maxScore)
  //     {
  //       maxScore=score;
  //       localStorage.setItem(storeName,rod);
  //       localStorage.setItem(storeScore,maxScore);
  //     }

  //     resetBoard(rod);
  //     alert(rod + " wins with a score of " + (score * 100) + ". Max score is: " + (maxScore * 100));
  //   }


  //   function gameReset(rod)
  //   {
  //     const initialPosition = gameboxWidth / 2;
  //     airod.style.left = initialPosition - airod.offsetWidth / 2 + 'px';
  //     userrod.style.left = initialPosition - userrod.offsetWidth / 2 + 'px';

  //     //losing player get the ball
  //     if (rod === userrodName) {
  //       ball.style.top = (airod.offsetTop + ai.offsetHeight) + 'px';
  //       ballSpeedY = 2;
  //   } else if (rod === airodName) {
  //       ball.style.top = (userrod.offsetTop - userrod.offsetHeight) + 'px';
  //       ballSpeedY = -2;
  //   } 
  //   score=0;
  //   gameOn=false;
  //   }

  // //   function gameReset(barName){
  // //     airod.style.left=((window.innerWidth-airod.offsetWidth)/2)+"px";
  // //     userrod.style.left=((window.innerWidth-userrod.offsetWidth)/2)+"px";
  // //     ball.style.left=((window.innerWidth-ball.offsetWidth)/2)+"px";
  // //     if(barName === rod_a){
  // //         ball.style.top=userrod.getBoundingClientRect().y-userrod.getBoundingClientRect().height+"px";
  // //         moveY=-2;
  // //     }
  // //    else if(barName === rod_b){
  // //     ball.style.top=airod.getBoundingClientRect().height+"px";
  // //     moveY=2;
  // //    }
  // //     score=0;
  // //     gameOn=false; 
  // //     spin.classList.remove("fa-spin"); 
  // // }

  //   function checkCollision(activepaddle)
  //   {
  //     let balltop=ball.offsetTop;
  //     let ballbottom=ball.offsetTop+ball.offsetHeight;
  //     let ballleft=ball.offsetLeft;
  //     let ballright=ball.offsetLeft+ball.offsetWidth;

  //     let paddletop=activepaddle.offsetTop;
  //     let paddlebottom=activepaddle.offsetTop+activepaddle.offsetHeight;
  //     let paddleleft=activepaddle.offsetLeft;
  //     let paddleright=activepaddle.offsetLeft+activepaddle.offsetWidth;

  //     let paddlecenterY=paddle.offsetTop+paddle.offsetHeight/2;
      
  //     if(ballright>=paddleleft && ballleft<=paddleright && balltop<=paddlebottom &&ballbottom>=paddletop)
  //     {
  //       if (paddletop < paddlecenterY) {
  //         this.paddleTopScore += 100;
  //         this.paddleTopScoreElement.innerText = this.paddleTopScore;
  //         return true;
  //       }
  //       //If bottom paddle
  //       else {
  //         this.paddleBottomScore += 100;
  //         this.paddleBottomScoreElement.innerText = this.paddleBottomScore;
  //         return true;
  //       }
  //     }
  //   }

  //   /*  ball movement in 2d(),it will have some velocity in x and y direction. we will update the position of the ball by adding the velocity to the position of the ball. we will also check if the ball is hitting the any wall or paddle.If it is hitting the wall or paddle,we will change the direction of the ball.
  //   the velocity of a ball is represented by a vector,it can be decomposed int Vx and Vy (x and y are the components of the velocity vector).
  //   the formula is v^2=Vx^2 + Vy^2.*/

  //   function moveBall(){
  //   if(ball.offsetLeft<0 || ball.offsetLeft>scorecard.offsetWidth-ball.offsetWidth)
  //   {
  //     Vx=-Vx;
  //   }
  //   if(ball.offsetTop<airod.offsetTop+airod.offsetHeight)
  //   { 
  //     Vy=-Vy;  
  //   }
  //   if(ball.offsetTop>scorecard.offsetHeight-ball.offsetHeight)
  //   {
  //     Vy=-Vy;
  //   }   
  //   ball.style.left=ball.offsetLeft + Vx + "px";
  //   ball.style.top=ball.offsetTop + Vy + "px";

  //   let paddle=ball.offsetTop<scorecard.offsetHeight/2 ? airod :userrod;
  //   let ballcenterX=ball.offsetLeft+ball.offsetWidth/2;
  //   let paddlecenterX=paddle.offsetLeft+paddle.offsetWidth/2;
  //   // if(checkCollision(paddle))
  //   // {
  //   //   Vy=-Vy;
  //   // }
  //   requestAnimationFrame(moveBall);
  //   }
  

  //   function moveRods(key) {
  //     const currentPosition1 = parseInt(airod.style.left) ;
  //     const currentPosition2 = parseInt(userrod.style.left) ;
  //     const step = 5; // Define the step size for rod movement

  //     // Move rods horizontally based on the key pressed
  //     if (key === 'a' && currentPosition1 - step >=0) {
  //       // Move rods to the left    
  //         airod.style.left = currentPosition1 - step + 'px';
  //         userrod.style.left = currentPosition2 - step + 'px';
  //       }
  //      else if (key === 'd' && currentPosition1 + airod.offsetWidth +step<=gameboxWidth) {
  //       // Move rods to the right
  //         airod.style.left = currentPosition1 + step + 'px';
  //         userrod.style.left = currentPosition2 + step + 'px';
  //       }
  //   }
  //   window.addEventListener('keypress',handleKeyPress);




// assing all id for html
var airod=document.getElementById("airod");
var userrod=document.getElementById("userrod");
var ball=document.getElementById("ball");
var scorecard=document.getElementById("scorecard");
var gamebox=document.getElementById("game-box");
const gameboxWidth=gamebox.offsetWidth;
var userscore=document.getElementById("userscore");
// var spin=document.getElementsById("spin");

// variable declartion
var movement=20;
const rod_a="I"
const rod_b="You"
const store_name="abc"
const store_score="123";
let rodName;
let highScore;
let moveX=2;
let moveY=2;
let ballMoving;
let score;
let border=12;
let gameStart=false;

// storage declare
localStorage.setItem(store_score,"null");
localStorage.setItem(store_name,"null");

// initial part for moving rod and game reset
(function(){
    highScore=localStorage.getItem(store_score);
    rodName=localStorage.getItem(store_name);
    if(highScore ==="null" || rodName ==="null"){
        alert(" Hey! this is your First game. \n Press Left Arrow or Key S for moving left direction \n Press Right Arrow or Key D for moving right direction \n Press Enter to Start! \n Your initial score is 100");

        // spin.classList.remove("fa-spin");
        highScore=0;
        rodName=rod_a;
    }
    else{
        alert(rodName + " has a maximum score " + highScore*10);
    }
    gameReset(rodName);
})();

// game reset
function gameReset(barName){
  airod.style.left=((window.innerWidth-airod.offsetWidth)/2)+"px";
  userrod.style.left=((window.innerWidth-userrod.offsetWidth)/2)+"px";
  ball.style.left=((window.innerWidth-ball.offsetWidth)/2)+"px";
  if(barName === rod_a){
      // ball.style.top=gamebox.offsetTop-userrod.getBoundingClientRect().y-ball.getBoundingClientRect().height+"px";
      ball.style.top=gamebox.offsetHeight-userrod.getBoundingClientRect().height-ball.offsetHeight/2+"px";
      moveY=-2;
  }
 else if(barName === rod_b){
  ball.style.top=airod.getBoundingClientRect().height+ball.offsetHeight/2+"px";
  moveY=2;
 }
  score=0;
  gameStart=false; 
  userscore.innerHTML=100;
  // spin.classList.remove("fa-spin"); 
}

// set the key function control with left arrow,right arrow or key a, key d

document.addEventListener('keydown',function(event){
  // moving left direction
  // if(event.code=="KeyA" || event.code=="ArrowLeft"){
  //   if(parseInt(airod.style.left)>border){
  //       airod.style.left=parseInt(airod.style.left)-movement+'px';
  //       userrod.style.left=airod.style.left;
  //   };
      const currentPosition1 = parseInt(airod.style.left) ;
      const currentPosition2 = parseInt(userrod.style.left) ;
      const step = 9; // Define the step size for rod movement

      // Move rods horizontally based on the key pressed
      if ((event.code=="KeyA" || event.code=="ArrowLeft") && currentPosition1 - step >=0) {
        // Move rods to the left    
          airod.style.left = currentPosition1 - step + 'px';
          userrod.style.left = currentPosition2 - step + 'px';
        }
       else if ((event.code=="KeyD" || event.code=="ArrowRight" )&& currentPosition1 + airod.offsetWidth +step<=gameboxWidth) {
        // Move rods to the right
          airod.style.left = currentPosition1 + step + 'px';
          userrod.style.left = currentPosition2 + step + 'px';
        }


// press enter for start
if(event.code=="Enter"){
    if(!gameStart){
        // spin.classList.add("fa-spin");
        gameStart=true;
        let ballRect=ball.getBoundingClientRect();
        let ballLeft=ballRect.x;
        let ballTop=ballRect.y;
        let ballDia=ballRect.width;
        let airodheight=airod.offsetHeight;
        let userrodheight=userrod.offsetHeight;
        let airodwidth=airod.offsetWidth;
        let userrodwidth=userrod.offsetWidth;
        ballMoving=setInterval(function(){
            let airodLeft=airod.getBoundingClientRect().x;
            let userrodLeft=userrod.getBoundingClientRect().x;
            let ballCenter=ballLeft+ballDia/2;
                ballLeft+=moveX;
                ballTop+=moveY;
                ball.style.top=ballTop+"px";
                ball.style.left=ballLeft+"px";
                if(((ballLeft+ballDia)>window.innerWidth)||(ballLeft<0)){
                    moveX=-moveX;
                }
                if (ballTop<=airodheight){
                    moveY=-moveY;
                    score++;
                    userscore.innerHTML=score*100;
                    if(((ballCenter<airodLeft) || (ballCenter>(airodLeft+airodwidth)))){
                        dataStoring(score,rod_b);
                    }
                }
                if((ballTop+ballDia)>=(window.innerHeight-userrodheight)){
                    moveY=-moveY;
                    score++;
                    userscore.innerHTML=score*100;
                    if((ballCenter<userrodLeft) || (ballCenter>(userrodLeft+userrodwidth))){
                        dataStoring(score,rod_a);
                    }
                }
            },10);

        }
    }
  });


// storage declartion
function dataStoring(scoreObt,winRod){
  if(scoreObt>highScore){
      highScore=scoreObt;
      localStorage.setItem(store_name,winRod);
      localStorage.setItem(store_score,highScore);
  }

  clearInterval(ballMoving);
  gameReset(winRod);
  // scorecard.textContent="Win "+winRod+" with score of "+(scoreObt*100)+". Maximum Score is "+(highScore*100); 
  alert(`       Game Over!!! 
        You got ${scoreObt * 100}  score . 
        Max Score: ${highScore * 100}`);
}



