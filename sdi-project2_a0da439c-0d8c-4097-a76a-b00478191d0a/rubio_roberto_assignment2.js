//  Roberto Rubio
//  SDI 1412
//  12/05/14
//  Project 2


//My Variables

var social = "Google+";
var theBest = true;
var numFriends = 5;


//Procedure
var myProcedure = function () {
    myPrompt = prompt("Which Social Media Website is the best for posting pics?", social);
    if (myPrompt === social) {
        console.log("I know I love it too!");
    } else {
        console.log("I really don't agree with you on that one.");
    }
};


//Main Code

//Procedure
myProcedure();