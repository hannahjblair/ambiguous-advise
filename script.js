function pr() {
    document.getElementById("result").innerHTML = document.getElementById('question').value;
  }

function clearInput() {
    document.getElementById("Form").reset();
  }

  // adapted from https://codepen.io/mina_mana_mu/pen/bGdNpdZ
  var sayings = [
    "Behind all things are reasons. Reasons can even explain the absurd.",
    "Watch, and see what life teaches",
    "All that we see in this world is based on someon's ideas. Some ideas are destructive, some are constructive. Some ideas can arrive in the forms of a dream. I can say it again: Some ideas arrive in the form of a dream",
    "There is a sadness in this world, for we are ignorant of many things. Yes- we are ignorant of many beautiful things. Thongs like the truth.So sadness in our ignorance is very real. The tears are real. What is this thing called a tear? There are even tiny ducts- tear ducts- to produce thhese tears should the sadness occur.",

  ]

  function quotes(){
  var randomNumber = Math.floor (Math.random()* (sayings.length));
  document.getElementById('quoteDisplay').innerHTML = sayings [randomNumber];
  }


  function showResult() {
    document.getElementById('result').style.display = "block";
  }
  
  function showReply() {
    document.getElementById('quoteDisplay').style.display = "block";
  }