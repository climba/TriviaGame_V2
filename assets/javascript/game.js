var questions = [
{
    question: "In rhyming slang, if someone said they we going to have a 'bo-peep', what they be doing?",
    answers: [ "Having a sleep", "Have a wee", "Drink some beer","Cook a BBQ" ],
    correctAnswer: "0"
  },
  {
    question: "Australians hold the world record for which amazing feat?",
    answers: [
     "Biggest BBQ",
     "Largest Christmas Cracker",
     "Most beer drank",
     "Biggest didgeridoo"
   ],
    correctAnswer: "1"
  },
  {
    question: "What is Kylie Minogue’s lingerie line called?",
    answers: [
     "Kylie Love",
     "Love from Kylie",
     "Love Kylie",
     "Kylie"
   ],
    correctAnswer: "2"
  },
  {
    question: "Where is the Big Prawn?",
    answers: [
     "Ballina",
     "Batemans Bay",
     "Bateau Bay",
     "Baudin Beach"
   ],
    correctAnswer: "0"
  },
  {
    question: "Approximately how many rabbits are there in Australia today?",
    answers: [
     "3 million",
     "30 million",
     "300 million",
     "3000 million"
   ],
    correctAnswer: "2"
  },
  {
    question: "What was the name of Olivia Newton-John’s chain of clothing stores?",
    answers: [
     "Xanadu",
     "Koala Blue",
     "Oliva",
     "Liv"
   ],
    correctAnswer: "1"
  }
];

$(document).ready(function() {

  var questionZone = $('#question-zone');
  var questionBox;
  var questionStem;

  for(var i = 0; i < questions.length; i++) {
    questionBox = $('<div>');
    questionStem = $('<p>');
    questionStem.addClass('question');
    questionStem.text(questions[i].question);

    var choices = $('<ul>');

    for(var j = 0; j < 4; j++) {
      var answerChoice = $('<li>');
      var answerInput = $('<input type="radio" name="answers' + i+  '">' + questions[i].answers[j] + '</input>');
      answerInput.attr('choice', j);
      answerChoice.append(answerInput);
      choices.append(answerChoice);

    }

    questionBox.append(questionStem);
    questionBox.append(choices);

    questionZone.append(questionBox);

  }

  $('#score-btn').on('click', function() {
    var checkedInputs = $('input:checked');
    var score = 0;
    for(var i = 0; i < checkedInputs.length; i++) {
      var userChoice = $(checkedInputs[i]).attr('choice');

      if(userChoice === questions[i].correctAnswer) {
        score++;
      }


    }
      console.log(score);
  });

});
