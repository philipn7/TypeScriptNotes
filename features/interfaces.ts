// Interface
interface Vehicle1 {
    name: string;
    year: number;
    broken: boolean;
};

// Object
const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};


// The annotation below is long, we can clean that up.
/* const printVehicle = (vehicle: { name: string, year: number, broken: boolean}): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
};
*/

const printVehicle = (vehicle: Vehicle1): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
};


printVehicle(oldCivic);