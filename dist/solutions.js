"use strict";
function multiplyValue(value, multiplier) {
    if (multiplier != undefined) {
        return value * multiplier;
    }
    else {
        return value * 2;
    }
}
function processInput(value) {
    if (typeof value === "string") {
        return value.trim();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        if (value === true) {
            return "Active";
        }
        else {
            return "Inactive";
        }
    }
}
function formatCoordinate(coordinate) {
    return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
}
function concatenateArrays(...arrays) {
    return arrays.flat();
}
function getPopularCourses(courses, minStudent) {
    let eligible = courses.filter((value) => value.isPublished && value.students >= minStudent);
    return eligible;
}
function pluckValues(items, key) {
    return items.map((value) => value[key]);
}
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        console.log(`Employee: ${this.name}, Base Salary: ${this.baseSalary}`);
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        console.log(`Manager of ${this.department}:${this.name}`);
    }
}
function validateAgeAsync(age) {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
        else {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
    });
}
async function main() {
    try {
        const result = await validateAgeAsync(20);
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}
main();
