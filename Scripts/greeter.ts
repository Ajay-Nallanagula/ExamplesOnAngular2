// function greeter(person:string) {
//     return "Hello, " + person;
// }

// var user = "Jane User";

// document.body.innerHTML = greeter(user);

interface IPerson {
    firstName: string;
    lastName: string;
}

function greeter(person:IPerson){
    return person.firstName + " "+person.lastName;
}


class Person implements IPerson{
 fullName:string;

constructor(public firstName,public lastName) {
    this.fullName = firstName +" "+lastName;
}

}
var person:IPerson  = new Person('Ajay','Kumar');

document.body.innerHTML = greeter(person);

