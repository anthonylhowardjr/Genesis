export function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

export function injectable<T extends { new(...args: any[]): {} }>(constructor: T) {
    console.log(constructor);
}

export function logClass<T extends { new(...args: any[]): {} }>(target: T) {

    // save a reference to the original constructor
    var original = target;

    // a utility function to generate instances of a class
    function construct(constructor: any, ...args: any[]) {
        var c: any = function () {
            return constructor.apply(null, args);
        }
        console.log(constructor.prototype.constructor.arguments);

        c.prototype = constructor.prototype;
        return new c();
    }

    // the new constructor behaviour
    var f: any = function (...args: any[]) {
        console.log("New: " + original.name);
        return construct(original, args);
    }

    // copy prototype so intanceof operator still works
    f.prototype = original.prototype;

    // return new constructor (will override original)
    return f;
}

export function f() {
    console.log("f(): evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    };
}

export function logger<T>(target: T, key: string, propertyDescriptor: PropertyDescriptor) {
    const org = propertyDescriptor.value;

    propertyDescriptor.value = function (...args: any[]) {
        const alter = org.apply(this, args);
        return alter;
    }

    return propertyDescriptor;
    console.log(org);
    console.log(key);
    console.log(propertyDescriptor.value);
}

export function classDecorator<T extends { new(...args: any[]): {} }>(
    constructor: T
) {
    // console.log(constructor.apply());

    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
}

declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
