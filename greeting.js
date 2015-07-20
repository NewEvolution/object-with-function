var greeting = function(firstName, lastName) {
  document.getElementById("output").innerHTML = "<h1>Welcome " + firstName + " " + lastName + "!</h1>";
}

var NameBlock = function(firstName, lastName) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.greet = greeting
}

var ryan = new NameBlock("Ryan", "Tanay");