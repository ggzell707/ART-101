// index.js - purpose and description here
// Author: Giselle Torres
// Date: April 28, 2024

function sortUserName (){
    let userName = window.prompt ("Hi. Please tell me your name so I can fix it.");
    console.log("userName=", userName);
    //split string to array
    let nameArray = userName.split('');
    console. log ("nameArray =", nameArray);
    //sort the array
    let nameArraySort = nameArray.sort();
    //join array back to string
    let nameSorted = nameArraySort.join('');
    console.log("nameSorted=", nameSorted);
    return nameSorted;
}


//output
document.writeln ("Oh hey, Ive fixed your name: ",
sortUserName(), "</br>");