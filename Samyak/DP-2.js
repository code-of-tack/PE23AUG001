
//main function to find vowel in sentence
function vowels(str){
    //assign counter variable
    var c=0

    //find all vowels in sentence
    for (let i = 0; i < str.length; i++) {
        if(str[i] === 'a'){
            c++;
        }else if(str[i] === 'e'){
            c++;
        }else if(str[i] === 'i'){
            c++;
        }else if(str[i] === 'o'){
            c++;
        }else if(str[i] === 'u'){
            c++;
        }
    }
    return c;
}

//function to perform miscellaneous task and display messages
function processData(input){
    console.log('Welcome to LinguaTech Pronunciation Analyzer!');
    

    const numofvowels= vowels(input)

    console.log('Thank you for providing the sentence')
    console.log('The sentence "The quick brown fox jumps over the lazy dog." contains ' + numofvowels + ' vowels')
}

//taking input from user using prompt keyword 
var userinput = prompt("Please enter a sentence to count the number of vowels:");

//calling function
processData(userinput)
