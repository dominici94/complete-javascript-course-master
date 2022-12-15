'use strict';

// dichiarazione di funzione
// const greeting = function (saluto) {
//     return function (name) {
//         console.log(`${saluto} ${name}`);
//     }
// }

// arrow function
// const greeting = (saluto) => (name) => console.log(`${saluto} ${name}`);

// const greeting = (saluto) => {
//     // console.log(saluto);
//     // console.log('pippo');
//     return (nome) => {
//         console.log(`${saluto} ${nome}`);
//     }
// }

// greeting('ciao');

// const saluda = (name) => greeting('salut')(name);

// saluda('mirko');

// greeting('Ciao')('Marco');

// const addTax = (rate, value) => value + value * rate;

// const addVAT = addTax.bind(null, 0.23);

// function faddTax(rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// }

// const faddVAT = faddTax(0.23);
// faddVAT(100);

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // il metodo mostra un prompt per far rispondere l'utente
    const [javascript, phyton, rust, cPlusPlus] = poll.options;
    const newQuestion = `${this.question}\n${javascript}\n${phyton}\n${rust}\n${cPlusPlus}\n(Write option number)`;
    const answer = Number(prompt(newQuestion));
    if (answer >= 0 && answer <= 3) {
      // se la risposta dell'utente è  valida viene inserita nell'array delle risposte
      alert(`${answer} is your choise`);
      poll.answers[answer]++;
      // console.log(this);
      //   console.log(this.displayResults(this.answers));
      //   return this.displayResults(this.answers);
      this.displayResults();
      this.displayResults('string');
    } else {
      alert('Your answer must be a number from 0 to 3... Retry');
    }
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type == 'string') {
      //   const [jav, pyt, rus, cplus] = poll.answers;
      return console.log(`Poll results are ${this.answers.join(', ')}`);
    } else {
      return console.log(type);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.registerNewAnswer

// poll.displayResults([5, 2, 3]);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
