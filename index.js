// Code your solutions in this file

const names = ['Lisa', 'Kaitlin', 'Jan'];
const event = ['Surprise']

let cards = []

function writeCards(names, event) {
  for (let i = 0; i < names.length; i++){
  cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);}

  return cards;}

let int = 10;


function countdown(number){
while (number > 0){
  console.log(number--);
  }
  console.log(number)
}
