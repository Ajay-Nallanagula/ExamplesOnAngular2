// function greeter(person:string) {
//     return "Hello, " + person;
// }
function greeter(person) {
    return person.firstName + " " + person.lastName;
}
var Person = (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Person;
}());
var person = new Person('Ajay', 'Kumar');
document.body.innerHTML = greeter(person);
