function takeANumber(current, newPerson) {
  var place = current.length + 1;
  var gretting = 'Welcome, ' + newPerson + '. You are number ' + place + ' in line.';
  current.push(newPerson);
  return greeting;
}