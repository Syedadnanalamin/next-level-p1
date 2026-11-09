
function multiplyValue(value: number, multiplier?: number) {
    if (multiplier != undefined) {

        return value * multiplier;
    }

    else {

        return value * 2;
    }
}



function processInput(value: string | number | boolean) {



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


function formatCoordinate(coordinate: readonly [number, number, string]) {


    return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`

}



function concatenateArrays<T>(...arrays: T[][]): T[] {


    return arrays.flat();
}



interface Course {
    title: string,
    students: number,
    isPublished: boolean

}



function getPopularCourses(courses: Course[], minStudent: number) {

    let eligible: Course[] = courses.filter((value) => value.isPublished && value.students >= minStudent);

    return eligible;
}






function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {


    return items.map((value) => value[key]);

}



class Employee {

    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {

        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): void {

        console.log(`Employee: ${this.name}, Base Salary: ${this.baseSalary}`);
    }

}

class Manager extends Employee {
    private department: string;
    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;

    }

    getRoleInfo(): void {

        console.log(`Manager of ${this.department}:${this.name}`)
    }

}




function validateAgeAsync(age: number): Promise<string> {
    return new Promise((resolve, reject) => {

        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
        } else {
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
    } catch (error) {
        console.log(error);
    }
}

main();
