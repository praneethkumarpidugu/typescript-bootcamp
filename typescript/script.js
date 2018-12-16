function Greeting(greeting) {
    this.greeting = greeting;
}
Greeting.prototype.greet = function () {
    return "hello, " + this.greeting;
};
var greeter = new Greeting("world");
var button = document.createElement("button");
button.textContent = "click me";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
