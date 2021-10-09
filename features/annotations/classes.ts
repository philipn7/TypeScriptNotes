class Vehicle {
    // Constructor for parameters. Use public so we don't need to
    // write the initialization code
    constructor(public color: string) {
    }

    drive(): void {
        console.log('chugga chugga');
    }

    honk(): void {
        console.log('beep');
    }
}

// Inheritence
class Car extends Vehicle {
    // Override
    drive(): void {
        console.log('vroom');
    }

}

const vehicle = new Vehicle('red');
vehicle.drive();