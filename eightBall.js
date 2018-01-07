let userName = 'Abby';

userName ? console.log(`Hello, ${ userName }`) : console.log('Hello!');

let userQuestion = 'Am I going to live to 150?';

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = ' ';

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidely so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = "Don't count on it";
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
  	break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  case 8:
    eightBall = 'Yes';
    break;
 }

console.log(userQuestion);
console.log('The eight ball answered: ' + eightBall);
