// These are the questions we will be using in the game
var questions = [
  {
      question: "In rhyming slang, if someone said they we going to have a 'bo-peep', what they be doing?",
      answers: [ "Having a sleep", "Have a wee", "Drink some beer", "Cook a BBQ" ],
      correctAnswer: "0"
    },
    {
      question: "Australians hold the world record for which amazing feat?",
      answers: [ "Biggest BBQ", "Largest Christmas Cracker", "Most beer drank", "Biggest didgeridoo" ],
      correctAnswer: "1"
    },
    {
      question: "What is Kylie Minogue’s lingerie line called?",
      answers: [ "Kylie Love", "Love from Kylie", "Love Kylie", "Kylie" ],
      correctAnswer: "2"
    },
    {
      question: "Where is the Big Prawn?",
      answers: [ "Ballina", "Batemans Bay", "Bateau Bay", "Baudin Beach" ],
      correctAnswer: "0"
    },
    {
      question: "Approximately how many rabbits are there in Australia today?",
      answers: [ "3 million", "30 million", "300 million", "3000 million" ],
      correctAnswer: "2"
    },
    {
      question: "What was the name of Olivia Newton-John’s chain of clothing stores?",
      answers: [ "Xanadu", "Koala Blue", "Oliva", "Liv"],
      correctAnswer: "1"
    },
    {
      question: "What famous beach is known for being in the final scene of point break?",
      answers: ["Bells Beach", "Bedourie", "Byron Bay", "Beachlands"],
      correctAnswer: "0"
    },
    {
      question: "Which of the following is not an Australian innovation?",
      answers: ["Chiko Roll", "Lawn Sprinkler", "Plastic bank notes", "Wine Cask"],
      correctAnswer: "1"
    },
    {
      question: "What creature does Jana Pittman have tattooed on her body?",
      answers: [ "Scorpion", "Bee", "Dragon", "Owl" ],
      correctAnswer: "1"
    },
    {
      question: "What was australias highest grossing film",
      answers: [ "Babe", "Happy Feet", "Crocodile Dundee", "Australia"],
      correctAnswer: "2"
    }
  ];
  
  $(document).ready(function() {
  
    // All of the questions will be dynamically loaded into the HTML in the div with id question-zone
    var questionZone = $('#question-zone');
    // Each quesiton set will be placed in a box with the question and answer options
    var questionBox;
    var questionStem;
    var counter;
  
  
    // Loop through all the questions
    for(var i = 0; i < questions.length; i++) {
      // Create a div for the questions
      questionBox = $('<div>');
      // Create a p tag for the question text
      questionStem = $('<p>');
      // Add a class to the question p tag to allow for styling
      questionStem.addClass('question');
      // Return each question
      questionStem.text(questions[i].question);
      
      // Create a HTML ul element
      var choices = $('<ul class="list-unstyled">');
      // Loop through the choices
      for(var j = 0; j < 4; j++) {
        // Create a HTML li element
        var answerChoice = $('<li>');
        // Loop through the array of options and create an input for each one
        var answerInput = $('<input class="radbtn" type="radio" name="answers' + i+  '">' + questions[i].answers[j] + '</input>');
        // Create an attribute called choice and assign a number to it
        answerInput.attr('choice', j);
        answerChoice.append(answerInput);
        choices.append(answerChoice);
      }
      
      questionBox.append(questionStem);
      questionBox.append(choices);
      questionZone.append(questionBox);
    }
  
    $('#score-btn').on('click', function() {
      scoreGame();
  
    });
  
    // If the user gets 4 out of 6 we will tell them they won! Otherwise they loose.
    function displayResults(result) {
      var resultMessage = (result > 8 ) ? ("Good Job!") : ("Sorry, keep studying!");
      var gameResult = $("<div>");
      var gameResultString = $("<p>").text(resultMessage + " Your score is " + result + " out of 10!");
      gameResultString.addClass("result");
      gameResult.append(gameResultString);
      $("#navbar").append(gameResult);
    }
  
    // Score the game
    function scoreGame() {
      clearInterval(counter);
      // Create a variable called checkedInputs
      var checkedInputs = $('input:checked');
      // Set the score to zero at the start
      var score = 0;
      // Test the players inputs against the answer attribute
      for(var i = 0; i < checkedInputs.length; i++) {
        var userChoice = $(checkedInputs[i]).attr('choice');
        // Check the choice attribute against the answer number stored in the array
        if(userChoice === questions[i].correctAnswer) {
          // Add a 1 to the score for each correct answer
          score++;
          
        }
      }
        console.log(score);
      // Call results function
      displayResults(score);
  
    }


  
    // Time the game
    function gameTimer() {
      // Set the time to this number
      var count =35;
      // create a variable called timer with a value of a HTML id
      var timer = $("#timer");
      // Add the class counter to the timer HTML element
      timer.addClass("counter")
      // Injects the text value of the timer and starts as the page loads
      timer.text(count + " seconds left");
      // This counts down and displays the current count in the HTML element
      counter = setInterval(function(){ 
        // Tell the timer to countdown
        count--; 
        // Display the amount of time left and display on the HTML element timer
        timer.text(count + " seconds left");
        // checks to see if time has run out. If yes scores the game
        if(count === 0) {
          scoreGame();
          clearInterval(counter);
        }
        // Tell the timer to count down each second
        }, 1000);
        
      }
      // Run gametime function
      gameTimer();
   

  });