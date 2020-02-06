function takeANumber(katzDeliLine, newPerson) {
  var place = katzDeliLine.length + 1;
  var greeting = 'Welcome, ' + newPerson + '. You are number ' + place + ' in line.';
  katzDeliLine.push(newPerson);
  return greeting;
};

function nowServing(katzDeliLine) {
  var message;
  if(katzDeliLine.length === 0) {
    message = 'There is nobody waiting to be served!'
  } else {
    message = 'Currently serving ' + katzDeliLine[0] + '.';
    katzDeliLine.shift();
  }
  return message;
}
