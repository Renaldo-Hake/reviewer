import { pluralize, set } from 'mongoose';
import './App.css';

function App() {

/*
In this function we will get a number (numerical) from the user and spell the number out.
The number will not contain commas or any seperators. 
When spelling the number we will add commas for seperation.
Must read any number from 0 to 999,999,999,999,999
*/

function spellNumber(){

  let spelling = "";
  let userNum = document.getElementById("number").value.split('');

  // Check to see if input is valid
  for(let i = 0; i < userNum.length; i++) {
    if( typeof(i) !== typeof(parseInt(userNum[i]))) {
      alert("enter a valid number eg. 12345678")
    }
  }

  const displaySpelledNum = document.getElementById("spelling");

  // Numeric positions
  const spelledOnes = [
    "",
    "one", 
    "two", 
    "three", 
    "four", 
    "five", 
    "six", 
    "seven",
    "eight", 
    "nine"
  ]

  const spelledTens = [
    "",
    "teen",
    "twenty",
    "thirty",
    "fourty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
  ]

  const powerValues = [
    'placeholder1',
    "placeholder2",
    "hundred",
    "thousand",
    "placeholder3",
    "placeholder4",
    "million",
    "placeholder5",
    "placeholder6",
    "billion",
    "placeholder7",
    "placeholder8",
    "trillion"
  ]


  /*
    The goal of loopNums to reduce the amount of repeated code. As we will run the below code for every 3
    numbers in the entire number given by the user. Eg. if the numnber is 995 667 443 we will need to run the
    below code 3 times. 
  */
  function loopNums(num, setvalue) {
    let spelledNum = '';

    if(num.length === 3){
      
      if(num[0] > 0){
        spelledNum += spelledOnes[parseInt(num[0])] + " hundred "
      }

      if(num[1] == 1 && num[2] == 0){
        if(setvalue === "set1"){ spelledNum += " and ten" }
        if(setvalue === "set2"){ spelledNum += " and ten thousand," }
        if(setvalue === "set3"){ spelledNum += " and ten million," }
        if(setvalue === "set4"){ spelledNum += " and ten billion," }
        if(setvalue === "set5"){ spelledNum += " and ten trillion," }

      } else if (num[1] == 1 && num[2] == 1){
        if (setvalue === "set1"){ spelledNum += " and eleven" }
        if (setvalue === "set2"){ spelledNum += " and eleven thousand," }
        if (setvalue === "set3"){ spelledNum += " and eleven million," }
        if (setvalue === "set4"){ spelledNum += " and eleven billion," }
        if (setvalue === "set5"){ spelledNum += " and eleven trillion," }

      } else if (num[1] == 1 && num[2] == 2){
        if(setvalue === "set1"){ spelledNum += " and twelve"}
        if(setvalue === "set2"){ spelledNum += " and twelve thousand,"}
        if(setvalue === "set3"){ spelledNum += " and twelve million,"}
        if(setvalue === "set4"){ spelledNum += " and twelve billion,"}
        if(setvalue === "set5"){ spelledNum += " and twelve trillion,"}

      } else if (num[1] == 1 && num[2] == 3){
        if(setvalue === "set1"){ spelledNum += " and thirteen" }
        if(setvalue === "set2"){ spelledNum += " and thirteen thousand," }
        if(setvalue === "set3"){ spelledNum += " and thirteen million," }
        if(setvalue === "set4"){ spelledNum += " and thirteen billion," }
        if(setvalue === "set5"){ spelledNum += " and thirteen trillion," }

      } else if (num[1] == 1 && num[2] > 3){
        if(setvalue === "set1"){ spelledNum += " and" + spelledOnes[parseInt(num[1])] + "teen" }
        if(setvalue === "set2"){ spelledNum += " and" + spelledOnes[parseInt(num[1])] + "teen thousand," }
        if(setvalue === "set3"){ spelledNum += " and" + spelledOnes[parseInt(num[1])] + "teen million," }
        if(setvalue === "set4"){ spelledNum += " and" + spelledOnes[parseInt(num[1])] + "teen billion," }
        if(setvalue === "set5"){ spelledNum += " and" + spelledOnes[parseInt(num[1])] + "teen trillion," }

      } else if (num[1] > 1 && num[2] > 0) {
        if(setvalue === "set1"){ spelledNum += " and " + spelledTens[num[1]] + " " + spelledOnes[num[2]] }
        if(setvalue === "set2"){ spelledNum += " and " + spelledTens[num[1]] + " " + spelledOnes[num[2]] + " thousand," }
        if(setvalue === "set3"){ spelledNum += " and " + spelledTens[num[1]] + " " + spelledOnes[num[2]] + " million," }
        if(setvalue === "set4"){ spelledNum += " and " + spelledTens[num[1]] + " " + spelledOnes[num[2]] + " billion," }
        if(setvalue === "set5"){ spelledNum += " and " + spelledTens[num[1]] + " " + spelledOnes[num[2]] + " trillion," }
 
      }else if (num[1] > 1 && num[2] == 0){
        if(setvalue === "set1"){ spelledNum += " and " + spelledTens[num[1]] }
        if(setvalue === "set2"){ spelledNum += " and " + spelledTens[num[1]] + " thousand," }
        if(setvalue === "set3"){ spelledNum += " and " + spelledTens[num[1]] + " million," }
        if(setvalue === "set4"){ spelledNum += " and " + spelledTens[num[1]] + " billion," }
        if(setvalue === "set5"){ spelledNum += " and " + spelledTens[num[1]] + " trillion," }

      } else if (num[1] == 0 && num[2] > 0){
        if(setvalue === "set1"){ spelledNum += " and " + spelledOnes[num[2]] }
        if(setvalue === "set2"){ spelledNum += " and " + spelledOnes[num[2]] + " thousand," }
        if(setvalue === "set3"){ spelledNum += " and " + spelledOnes[num[2]] + " million," }
        if(setvalue === "set4"){ spelledNum += " and " + spelledOnes[num[2]] + " billion," }
        if(setvalue === "set5"){ spelledNum += " and " + spelledOnes[num[2]] + " trillion," }

      } 

    } 
    
  
    if(num.length === 2) {

      if(num[0] == 1 && num[1] == 0){
        if(setvalue === "set1"){spelledNum += " ten"}
        if(setvalue === "set2"){spelledNum += " ten thousand,"}
        if(setvalue === "set3"){spelledNum += " ten million,"}
        if(setvalue === "set4"){spelledNum += " ten billion,"}
        if(setvalue === "set5"){spelledNum += " ten trillion,"}

      } else if (num[0] == 1 && num[1] == 1){
        if(setvalue === "set1"){spelledNum += " eleven"}
        if(setvalue === "set2"){spelledNum += " eleven thousand,"}
        if(setvalue === "set3"){spelledNum += " eleven million,"}
        if(setvalue === "set4"){spelledNum += " eleven billion,"}
        if(setvalue === "set5"){spelledNum += " eleven trillion,"}

      } else if (num[0] == 1 && num[1] == 2){
        if(setvalue === "set1"){spelledNum += " twelve"}
        if(setvalue === "set2"){spelledNum += " twelve thousand,"}
        if(setvalue === "set3"){spelledNum += " twelve million,"}
        if(setvalue === "set4"){spelledNum += " twelve billion,"}
        if(setvalue === "set5"){spelledNum += " twelve trillion,"}

      } else if (num[0] == 1 && num[1] == 3){
        if(setvalue === "set1"){spelledNum += " thirteen"}
        if(setvalue === "set2"){spelledNum += " thirteen thousand,"}
        if(setvalue === "set3"){spelledNum += " thirteen million,"}
        if(setvalue === "set4"){spelledNum += " thirteen billion,"}
        if(setvalue === "set5"){spelledNum += " thirteen trillion,"}

      } else if (num[0] == 1 && num[1] > 3){
        if(setvalue === "set1"){spelledNum += spelledOnes[parseInt(num[1])] + "teen"}
        if(setvalue === "set2"){spelledNum += spelledOnes[parseInt(num[1])] + "teen thousand,"}
        if(setvalue === "set3"){spelledNum += spelledOnes[parseInt(num[1])] + "teen milion,"}
        if(setvalue === "set4"){spelledNum += spelledOnes[parseInt(num[1])] + "teen billion,"}
        if(setvalue === "set5"){spelledNum += spelledOnes[parseInt(num[1])] + "teen trillion,"}

      } else if (num[0] > 1 && num[1] > 0) {
        if(setvalue === "set1"){ spelledNum += " and " + spelledTens[num[0]] + " " + spelledOnes[num[1]] }
        if(setvalue === "set1"){ spelledNum += " and " + spelledTens[num[0]] + " " + spelledOnes[num[1]] + " thousand," }
        if(setvalue === "set3"){ spelledNum += " and " + spelledTens[num[0]] + " " + spelledOnes[num[1]] + " million," }
        if(setvalue === "set4"){ spelledNum += " and " + spelledTens[num[0]] + " " + spelledOnes[num[1]] + " billion," }
        if(setvalue === "set5"){ spelledNum += " and " + spelledTens[num[0]] + " " + spelledOnes[num[1]] + " trillion," }
 
      }else if (num[0] > 1 && num[1] == 0){
        if(setvalue === "set1"){ spelledNum += " and " + spelledTens[num[0]] }
        if(setvalue === "set2"){ spelledNum += " and " + spelledTens[num[0]] + " thousand," }
        if(setvalue === "set3"){ spelledNum += " and " + spelledTens[num[0]] + " million," }
        if(setvalue === "set4"){ spelledNum += " and " + spelledTens[num[0]] + " billion," }
        if(setvalue === "set5"){ spelledNum += " and " + spelledTens[num[0]] + " trillion," }

      } 

    }
  
    if(num.length === 1) {

      if(setvalue === "set1"){ spelledNum += spelledOnes[parseInt(num[0])] }
      if(setvalue === "set2"){ spelledNum += spelledOnes[parseInt(num[0])] + " thousand," }
      if(setvalue === "set3"){ spelledNum += spelledOnes[parseInt(num[0])] + " million," }
      if(setvalue === "set4"){ spelledNum += spelledOnes[parseInt(num[0])] + " billion," }
      if(setvalue === "set5"){ spelledNum += spelledOnes[parseInt(num[0])] + " trillion," }

    }

    return spelledNum;

  }


  // This function will remove all undefined values and replace it with an empty string
  function removeUndefined(set) {
    set = set.filter(function( element ) {
      return element !== undefined;
   });

   return set
  }


  
  const numberLength = userNum.length;
  // 1 - 999
  let set1 = []
  for(let i = 0; i < 3; i++){
    set1.push(userNum.pop())
  }
  set1 = set1.reverse()
  set1 = removeUndefined(set1)

  //1000-999999
  let set2 = []
  for(let i = 0; i < 3; i++){
    set2.push(userNum.pop())
  }
  set2 = set2.reverse()
  set2 = removeUndefined(set2)

  //1000000 - 999999999
  let set3 = []
  for(let i = 0; i < 3; i++){
    set3.push(userNum.pop())
  }
  set3 = set3.reverse()
  set3 = removeUndefined(set3)

  //1000000000 - 999999999999
  let set4 = []
  for(let i = 0; i < 3; i++){
    set4.push(userNum.pop())
  }
  set4 = set4.reverse()
  set4 = removeUndefined(set4)

  // 1000000000000000 - 999999999999999
  let set5 = []
  for(let i = 0; i < 3; i++){
    set5.push(userNum.pop())
  }
  set5 = set5.reverse()
  console.log(set5)
  set5 = removeUndefined(set5)


  // construct the final spelling 
  spelling += loopNums(set5, "set5") + loopNums(set4, "set4") + loopNums(set3, "set3") + loopNums(set2, "set2") + loopNums(set1, "set1")



  displaySpelledNum.innerHTML =  spelling
}


  return (
    <div className="App">
      <h1>Enter a number below:</h1>
      <input id="number"/>
      <button id="button" onClick={() => spellNumber()}>Enter</button>
      <p id="spelling">Spelling: </p>
    </div>
  );
}

export default App;
