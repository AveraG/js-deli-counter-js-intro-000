function takeANumber(katzDeliLine, newPerson) {
  var place = katzDeliLine.length + 1;
  var greeting = 'Welcome, ' + newPerson + '. You are number ' + place + ' in line.';
  katzDeliLine.push(newPerson);
  return greeting;
};

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
  } else {
    return 'There is nobody waiting to be served!'
  }
}
