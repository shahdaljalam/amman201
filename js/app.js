'use strict';

let result = 0;


let username = prompt('enter your name');
console.log(username);


alert('welcome ' + username);

for (let question = 1; question <= 5; question++) {
  let answer;
  switch (question) {
    case 1:
      answer = prompt('do you think that i am a girl ?');
      break;
    case 2:
      answer = prompt('do you think that i am oldar than 25 ?');
      break;
    case 3:
      answer = prompt('do you think that i studied engineering ?');
      break;
    case 4:
      answer = prompt('do you think that i am a good programer ?');
      break;
    case 5:
      answer = prompt('did you enjoy ?');
      break;
  }

  answer = answer.toLowerCase();

  while (answer !== 'yes' && answer !== 'y' && answer !== 'no' && answer !== 'n') {
    answer = prompt('do you think that i am a girl ?');
    answer = answer.toLowerCase();
  }

  if (answer === 'yes' || answer === 'y') {
    alert('right answer')
    // eslint-disable-next-line no-unused-vars
    result++;

  }
  else {
    alert('wrong answer');
  }
}

function mytall() {
  let aswerCorrectly = false;
  for (let useranswer1 = 1; useranswer1 < 5; useranswer1++) {
    let mytall = prompt('can you guess my tall ?');
    console.log(mytall);

    if (mytall < 155) {
      alert('too low');
    }

    if (mytall > 155) {
      alert('too high');
    }
    // eslint-disable-next-line eqeqeq
    if (mytall == 155) {
      alert('right answer');
      result++;
      aswerCorrectly = true;
      break;
    }
  }
  if (aswerCorrectly == false) {

    alert('the right answer is 155');
  }
}

mytall();

let drinks = new Array('coffee', 'tea', 'water');
let breakk = false;
for (let useranswer2 = 1; useranswer2 < 7; useranswer2++) {
  let drink = prompt('can you guess my faviorate drink ?');
  console.log(drink);

  for (let drinkloop = 0; drinkloop < 3; drinkloop++) {

    if (drink === drinks[drinkloop]) {
      alert('right answer');
      result++;

      breakk = true;
    }

  }

  if (breakk === true) {
    break;
  }

}
if (breakk == false) {
  alert("my fav drinks are coffee , tea, and water")
}

/* let mark = 0;
for (let userMark = 0 ; answer = answer !== 'yes' && answer !== 'y' ; userMark++) */



alert('Thank you so much ' + username + 'you got ' + result + '/7, good for you');
