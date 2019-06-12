var myFuncCalls = 0;
function change_quote() {
  myFuncCalls++;
  var quotes = [
    "Pasta doesn't make you fat.<br> How much pasta you eat makes you fat.",
    "Eat better,<br>feel better.",
    "You don't have to see the whole staircase.<br>Just take the first step.",
    "Do not reward yourself with food.<br>You're not a dog!",
    "Eat less sugar,<br>you're sweet enough.",
    "Nothing brings people together<br>like good food.",
    "Don't eat less.<br>Eat right.",
    "Three months from now,<br>you'll thank yourself.",
    "You don't have to go fast.<br>You just have to go.",
    "To change your body,<br>you must first change your mind."
  ];
  var g = document.getElementsByClassName("aside-section");
  var h = document.getElementById("quote");
   if(g[0].style.display == 'flex') {
     if(myFuncCalls===quotes.length){
       myFuncCalls=0;
     }
     h.innerHTML = quotes[myFuncCalls];
   }
}
