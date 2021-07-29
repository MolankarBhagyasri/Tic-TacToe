function startGame()
{
    for(var i = 1; i<= 9; i = i+1)
    {
        clearBox(i);
    }
      document.turn = "X";

    if (Math.random()< 0.5)
    {
      document.turn  = "O";
    }
    document.Winner  = null;
    setMessage(  "let's get to  Start 👍🏻.");
    document.getElementById("s1");
    document.getElementById("s2");
    document.getElementById("s3");
    document.getElementById("s4");
    document.getElementById("s6");
    document.getElementById("s7");
    document.getElementById("s8");
    document.getElementById("s9");
}

function setMessage(msg) 
{
    document.getElementById("message").textContent = msg;
}
function nextMove(Square)
{
    if(document.Winner !== null)
    {
        setMessage(document.Winner + "Already Won the Game!");

    }

    else if(Square.textContent === "")
    {
        Square.textContent = document.turn;
        SwitchTurn();
    }
    else
    {
        setMessage("That Square is Already Used.")
    }
}
function SwitchTurn()
{
    if(checkforWinner(document.turn))
    {
         setMessage("Congratulations " + document.turn + "! You Win 😄🎉");
             celebration();
          document.Winner = document.turn;
    }
    else 
    if(CheckforTie())
    {
        setMessage("Its a TIE..!! Play again...!!!");
    }
    else if (document.turn === "X")
    {
        document.turn = "O";
        setMessage("It's " + document.turn + "'s turn!");
    }
    else
    {
        document.turn = "X";
        setMessage("It's " + document.turn + "'s turn!");
    }
}

function checkforWinner(move)
{
    var result = false;
    if(checkRow(1,2,3, move) ||   checkRow(4,5,6, move)   ||
     checkRow(7,8,9, move)   ||   checkRow(1,4,7, move)   ||
     checkRow(2,5,8, move)   ||   checkRow(3,6,9, move)   ||
     checkRow(1,5,9, move)   ||   checkRow(3,5,7, move))
    {
     result = true;
    }
     return result;
}

function checkRow(a,b,c, move)
{
    var result = false;
    if (getBox(a) === move && getBox(b) === move && getBox(c) === move)
    {
    	result = true;
    }
    	return result;
}

function getBox(number)
{
        return document.getElementById("s" + number).textContent;
}

function clearBox(number)
{
       document.getElementById("s" + number).textContent = "";
}

function CheckforTie()
{
    for(var i = 1; i < 10; i++)
	{

  		if(getBox(i) === "")
   		  return false;
	}    
          return true;
}
function clr()
{
    location.reload();
}

function celebration(){
    confetti.start(); // inbuilt h ye function  start()
}




