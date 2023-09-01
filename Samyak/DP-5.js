//function to roll the dice and display message
function rollDice() {
    console.log('Welcome to DiceMaster Dice Game!');
    alert("Press the 'Roll' button to roll the dice: ");
    console.log('Thank you for rolling the dice.')

    /*using ihe math.random to select a random number from 
    1 to 6 and then using math.floor to converting float point number 
    to positive integer*/
    
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;

  //sum of dice  
  const sum = dice1 + dice2;

  console.log('You rolled a '+ dice1 +' and a '+ dice2 +'. The sum is '+ sum +'.');
}

//calling the function
rollDice();

