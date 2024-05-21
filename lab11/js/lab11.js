
// index.js -  JavaScript Events and Forms
// Author: Giselle Torres
// Date: May 20, 2024

//credit ChatGpt
function sortString(inputString) {
    let new_word = [];
    let input_size = inputString.length;

    for(let i=0; i < input_size; i++) {
        let rand_int = Math.floor(Math.random() * input_size); //correct calculation for a ranbdom index
        new_word.push(inputString[rand_int]); 
    }

    return new_word.join('');
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




