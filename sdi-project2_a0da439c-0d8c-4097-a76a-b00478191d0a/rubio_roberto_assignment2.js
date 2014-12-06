//  Roberto Rubio
//  SDI 1412
//  12/05/14
//  Project 2


//My Variables
var social = "Google+";
var theBest = true;
var numFriends = 5;
var returnBoolean;

//Procedure 
var myProcedure = function () {
    myPrompt = prompt("Which Social Media website is the best for posting pics?", social);
    if (myPrompt === social) {
        console.log("I know I love it too!");
    } else {
        console.log("I really don't agree with you on that one.");
    }
};

//Confirm and Boolean Function While Loop
var ask = function () {
    var myConfirm = confirm("Let's try this again. Isn't " + social + " the best?");
    return myConfirm;
};
var returnBoolean = function (myConfirm, theBest) {
    if (myConfirm === theBest) {
        console.log("OK OK I think I've made my point.");
    } else {
        while (myConfirm != theBest) {
        var myConfirm = confirm("Let's try this again. Isn't " + social + " the best?");
        console.log("Just say it is already. Please!");
        }
    };
};


//Main Code
console.log("I have a bunch of pictures I want to post online and I'd like you to help me out.");

//Procedure
myProcedure();

//Confirm
var myConfirm = ask();

//Boolean Function Return
returnBoolean(myConfirm, theBest);
console.log("Let's move on then.");
