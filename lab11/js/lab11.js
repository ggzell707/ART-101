// index.js -  JavaScript Events and Forms
// Author: Giselle Torres
// Date: May 20, 2024


//credit: Chatgpt

function sortString(inputString) {
    //Convert the input string to an array of characters 
    let charsArray = inputString.split('');

    //Shuffle the array using the Fisher-Yates algorithm 
    for(let i= charsArray.length -1; i>0; i--) {
        //generate a random index
        let randIndex = Math.floor(Math.random() * (i+1)); 

        //swap the current element with the element at random index
        [charsArray[i], charsArray[randIndex]] = [charsArray[randIndex], charsArray[i]];
    }

        //join the shuffled array back into a string
        return charsArray.join('');
    }



  // click listener for button
  $("#submit").click(function(){

  // get value of input field
  const userName = $("#user-name").val();

  // now let's sort it
  userNameSorted = sortString(userName);

  // append a new div to our output div
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});

