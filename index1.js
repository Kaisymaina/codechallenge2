

function changeCase(inputString) {
  
    let changedString = "";

    //the following enables going through one letter at a time
    for (let i = 0; i < inputString.length; i++) {
        // We take out one letter at a time
        let letter = inputString[i];

        
        // If the letter is in capital letters it is changed to small letters and if the letter is in small letters it is changed to capital letters
        
        if (letter === letter.toUpperCase()) {
            changedString += letter.toLowerCase();
        } 
        
        else {
            changedString += letter.toUpperCase();
        }
    }

    return changedString;
}

//to see if the lines are working test in the lines below
let inputStr = 'Make It Pop';
let outputStr = changeCase(inputStr);
console.log(outputStr); 
//here the output will be "mAKE iT pOP"