##Type Aliases vs Interfaces in TypeScript

##Introduction

Type aliases and interfaces are important concepts in TypeScript. Both are used to define the structure of data and make our code more organized.

##Detailed Body

#Type Alias

A type alias is used to create a new name for a type. It can define objects, primitive types, unions, and other types.

type User = {
    name: string;
    age: number;
};

type ID = string | number;

#Interface

An interface is mainly used to define the structure of objects. It describes what properties and methods an object should have.

interface User {
    name: string;
    age: number;
}

#Core Differences

One important difference is that interfaces can be extended and also support declaration merging. Type aliases cannot be reopened for declaration merging. However, type aliases support union types, which interfaces cannot directly do.

interface Admin extends User {
    role: string;
}

type Status = "active" | "inactive";

#When to Choose?

I prefer using interfaces for object structures and class contracts. Type aliases is useful for unions, primitive types, and complex type combinations.

#Conclusion

Both type aliases and interfaces are useful in TypeScript. Choosing the right one depends on the requirements of our project.