function scuberGreetingForFeet(feet) {
  // Write your code here!
  if (feet <= 400) {
    return 'This one is on me!';
  } 
  else if (feet > 400 && feet <= 2000) {
    return 'That will be twenty bucks.';
  }
  else if (feet > 2000 && feet <= 2500) { 
    return 'I will gladly take your thirty bucks.';
  }
  else if (feet > 2500) { 
    return 'No can do.';
  }
}
scuberGreetingForFeet();


function ternaryCheckCity(city){
  // Write your code here!
  let message;
  city === 'NYC' ? message = 'Ok, sounds good.' : message ='No go.';

  return message;
} 

function switchOnCharmFromTip(tipAmount){
  // Write your code here!
  let response;
  switch (tipAmount) { 
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default: 
      response = 'Bye.';
      break;
  }
  return response;
}