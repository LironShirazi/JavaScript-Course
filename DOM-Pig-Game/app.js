    var scores, roundScore, activePlayer,gamePlaying;
    startGame();


    document.querySelector('.btn-roll').addEventListener("click",function(){
    if(gamePlaying){
    //random number
    var dice = Math.floor(Math.random()*6)+1;
    var diceDOM = document.querySelector('.dice');
    //display the results
    if(dice!==1){
        roundScore += dice;
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";
    } else {
        gamePlaying=1;
        nextPlayer();
    }
   }
});
    document.querySelector(".btn-hold").addEventListener("click",function(){
        // add current score to global score
        if(gamePlaying){

            scores[activePlayer]+= roundScore;
            document.getElementById("score-"+activePlayer).textContent = scores[activePlayer]; 
            if(scores[activePlayer] >= 100){
                gamePlaying = 0;
                document.querySelector("#name-"+activePlayer).textContent = "WINNER!";
                document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
                document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
                document.querySelector(".dice").style.display = "none";
            
            } else {
                
                nextPlayer();
            }
        }

    
    });

    function nextPlayer(){
        
      roundScore = 0;
      document.querySelector('#current-0').textContent = '0';
      document.querySelector('#current-1').textContent = '0';
        //change player turn
      activePlayer === 0 ? activePlayer = 1 : activePlayer=0;
      document.querySelector(".player-0-panel").classList.toggle("active");
      document.querySelector(".player-1-panel").classList.toggle("active");      
      
       //remove the display of the dice if 1 randomed
       document.querySelector('.dice').style.display = "none";
    }

    //start game function - initializing the starting variables 
    function startGame(){
        gamePlaying=1;
        scores = [0,0];
        activePlayer = 0 ;
        roundScore = 0;
        document.querySelector("#name-0").textContent = "Player 1";
        document.querySelector("#name-1").textContent = "Player 2";
        document.querySelector(".player-0-panel").classList.remove("winner");
        document.querySelector(".player-1-panel").classList.remove("winner");
        document.querySelector(".player-0-panel").classList.remove("active");
        document.querySelector(".player-1-panel").classList.remove("active");
        document.querySelector(".player-0-panel").classList.add("active");

        document.querySelector('.dice').style.display = 'none';
        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        }
    
    // new game button click
    document.querySelector(".btn-new").addEventListener("click",startGame);
        
        



    