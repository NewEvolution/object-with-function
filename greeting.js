var greeting = function(firstName, lastName) {
  document.getElementById("output").innerHTML = "Welcome " + firstName + " " + lastName + "!";
}

var NameBlock = function(firstName, lastName) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.greet = greeting
}

var ryan = new NameBlock("Ryan", "Tanay");