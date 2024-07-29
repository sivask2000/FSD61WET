class Person {
    constructor(name, age, address, phoneNumber) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getAddress() {
        return this.address;
    }

    setAddress(address) {
        this.address = address;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    toString() {
        return `Person [name=${this.name}, age=${this.age}, address=${this.address}, phoneNumber=${this.phoneNumber}]`;
    }
}

// Example usage:
let person1 = new Person("John Doe", 30, "123 Main St", "555-1234");
console.log(person1.toString());

person1.setAge(31);
console.log(person1.getAge());

person1.setAddress("456 Elm St");
console.log(person1.getAddress()); 
