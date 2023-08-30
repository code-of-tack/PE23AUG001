
//main function to find vowel in sentence
function vowels(str){
    //assign counter variable
    var c=0

    //find all vowels in sentence
    for (let i = 0; i < str.length; i++) {
        if(str[i] === 'a' || 'A'){
            c++;
        }else if(str[i] === 'e' || 'E'){
            c++;
        }else if(str[i] === 'i' || 'I'){
            c++;
        }else if(str[i] === 'o' || 'O'){
            c++;
        }else if(str[i] === 'u' || 'U'){
            c++;
        }
    }
    return c;
}

//function to perform miscellaneous task and display messages
function processData(){
    console.log('Welcome to LinguaTech Pronunciation Analyzer!');
    //taking input from user using prompt keyword 
    var userinput = prompt("Please enter a sentence to count the number of vowels:");

    const numofvowels= vowels(userinput)

    console.log('Thank you for providing the sentence')
    console.log('The sentence ' + userinput+ ' contains ' + numofvowels + ' vowels')
}




//calling function
processData()
