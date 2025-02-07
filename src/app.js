import "bootstrap";
import "./style.css";



window.onload = function() {
  //write your code here
  function generateExcuses(numExcuses) {
    const who = [
    'The dog',
    'My grandma',
    'The mailman',
    'My bird'
    ];
    const action = [
    'ate',
    'peed',
    'crushed',
    'broke'
    ];
    const what = [
    'my homework',
    'my phone',
    'the car'
    ];
    const when = [
    'before the class',
    'when I was sleeping',
    'while I was exercising',
    'during my lunch',
    'while I was praying'
    ];
  
    const excuses = [];
  
    for (let i = 0; i < numExcuses; i++) {
      const numberWho = Math.floor(Math.random() * who.length);
      const numberAction = Math.floor(Math.random() * action.length);
      const numberWhat = Math.floor(Math.random() * what.length);
      const numberWhen = Math.floor(Math.random() * when.length);
  
    const excuse = `${who[numberWho]} ${action[numberAction]} ${what[numberWhat]} ${when[numberWhen]}`;
    excuses.push(excuse);
    }
  
    return excuses;
  }
  
  const myExcuses = generateExcuses(1);
  document.getElementById("excuse").innerHTML = myExcuses[0];
};
