const add = (a: number, b: number): number => {
    return a + b;
};

function divide(a: number, b:number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number{
    return a * b;
}

const throwError = (message: string): never => {
    throw new Error(message);
    // technically does not return anything, so type is 'never'
    // this is a corner case, typically we do TRY to return something.
}