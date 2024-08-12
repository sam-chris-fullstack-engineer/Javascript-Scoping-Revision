'use strict';
function calcAge(birthyear) {
  const age = 2037 - birthyear;

  function printAge() {
    let output = ` ${firstName} you are ${age}, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      // Creating New variable with same name as  outer scope's variable 
      const firstName ='Christopher'
      
      //Reassigning outer scope's variable
      output= 'New Output!';
      
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b){
        return a+b;
      }
    }
    // console.log(str);

    console.log(millenial);
    console.log(output);
    
  }

  printAge();
  return age;
}

const firstName = 'Sam';
calcAge(1996);
