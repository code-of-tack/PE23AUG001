(function() {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let modulus = document.querySelector('.btn-modulus');

    // Adding event listner to all the buttons
    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num; // Get the value of the clicked button
             //Check if the value is a number or an operator            
             if (!['+', '-', '*', '/','%','.'].includes(value)) {
               // Convert value to a number (assuming it's a string representing a number)
               value = parseFloat(value);
                // Check if the conversion was successful and it's a valid number
                if (!isNaN(value)) {
                    screen.value += value;
                }
            } else {
                // If it's an operator, directly append it to the screen
                screen.value += value;
            }

        })
    });

    modulus.addEventListener('click',function(e){
        let mod = (parseFloat(screen.value)/100).toString();
        screen.value = mod;
    })

    equal.addEventListener('click',function(e){
        if(screen.value === ''){
            screen.value = "";
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click',function(e){
        screen.value = "";
    });

    


})();