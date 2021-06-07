const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [question, "True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = [correctAnswer, "true", 	"40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  
  let candidateName = input.question("What is your name? "); 
  console.log("Hello, " + candidateName);
}

function askQuestion() {
  for (let i = 0; i <= questions.length-1; i++){
    candidateAnswers.push(input.question(questions[i]));
    }

  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
}


function gradeQuiz(candidateAnswers) {
    /*if (candidateAnswers === correctAnswers){
      console.log("you are correct =]");
    } else {
      console.log("please review your notes ♥");
    }*/


  console.log(`Candidate Name: ${candidateName}`);
    for (let i = 0; i <= questions.length-1; i++){
  
  console.log(`${i+1}) ${questions[i]}`);
  console.log(`Your Answer: ${candidateAnswers[i]}`);
  console.log(`Correct Answer: ${correctAnswers[i]}\n`);
    }

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade;
  let gradedCorrectAnswers = 0; 
  for (let i = 0; i <= questions.length-1; i++){
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      gradedCorrectAnswers = gradedCorrectAnswers + 1;
    } 
    
  }
  grade = gradedCorrectAnswers/questions.length*100;
console.log(`>>> Overall Grade: ${grade}% (${gradedCorrectAnswers} of ${questions.length} responses correct) <<< `);

if (grade >= 80){
      console.log(`>>> Status: PASSED <<<`);
    } else {
      console.log (`>>> Status: FAILED <<<`);
    }


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};