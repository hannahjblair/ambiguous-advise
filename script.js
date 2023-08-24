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
    "All that we see in this world is based on someone's ideas. Some ideas are destructive, some are constructive. Some ideas can arrive in the forms of a dream. I can say it again: Some ideas arrive in the form of a dream",
    "There is a sadness in this world, for we are ignorant of many things. Yes- we are ignorant of many beautiful things. Things like the truth.So sadness in our ignorance is very real. The tears are real. What is this thing called a tear? There are even tiny ducts- tear ducts- to produce thhese tears should the sadness occur.",
    "Then the day when the sadness comes. Then we ask, 'Will the sadness which makes me cry, will the sadness that makes me cry my heart out, will it ever end?' The answer, of course, is yes. One day, the sadness will end.",
    "Even the ones who laugh are sometimes caught without an answer. These creatures who introduce themselves, but we swear we have met them somewhere before, yes? Look in the mirror. What do you see? Is it a dream, or a nightmare? Are we being introduced against our will? Are they mirrors? I can see the smoke. I can smell the fire. The battle is drawing nigh.",
    "I play my part on life's stage. I tell what I can to form the perfect answer. But that answer cannot come before all are ready to hear.",
    "Stars, moons, and planets remind us of protons, neutrons, and electrons. Is there a bigger being walking with all the stars within? Does our thinking affect what goes on outside us, and what goes on inside us? I think it does. those horrible times when we see the eyes – eyes that have no soul, then we know a darkness. Then we wonder: where is the beauty? There is none, if the eyes are soulless.",
    "Stars, moons, and planets remind us of protons, neutrons, and electrons. Is there a bigger being walking with all the stars within? Does our thinking affect what goes on outside us, and what goes on inside us? I think it does.",
    "Where does creamed corn figure into the workings of the universe? What really is creamed corn? Is it a symbol for something else?",
    "Yes, it is a dilemma. Is there an answer? Of course there is. A wise person once said with a smile, the answer is within the question.",
    "Balance is the key. Balance is the key to many things. Do we understand balance? The word 'balance' has seven letters. Seven is difficult to balance, but not impossible – we are able to divide. There are, of course, the pros and cons of division.",
    "So now the sadness comes. The revelation. There is a depression after an answer is given. It was almost fun not knowing. Yes, now we know. At least we know what we sought in the beginning. But there is still the question, why? And this question will go on and on until the final answer comes. Then the knowing is so full there is no room for questions.",
    "Complications set in--yes, complications. How many times have we heard: 'it's simple'. Nothing is simple. We live in a world where nothing is simple. Each day, just when we think we have a handle on things, suddenly some new element is introduced and everything is complicated once again.",
    "Is life like a game of chess? Are our present moves important for future success? I think so. We paint our future with every present brush stroke.",
    "Sometimes, well let's say all times, things are changing",
    "There are clues everywhere, all around us. But the puzzle maker is clever. The clues, although surrounding us, are somehow mistaken for something else. And the something else, the wrong interpretation of the clues, we call our world. Our world is a magical smoke screen. How should we interpret the happy song of the meadowlark or the robust flavor of a wild strawberry?",

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