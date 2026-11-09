
// problem 1
function multiplyValue(value: number, multiplier?: number) {
    if (multiplier != undefined) {

        return value * multiplier;
    }

    else {

        return value * 2;
    }
}

// problem 2

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

// problem 3

function formatCoordinate(coordinate: readonly [number, number, string]) {


    return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`

}


// problem 4

function concatenateArrays<T>(...arrays: T[][]): T[] {


    return arrays.flat();
}

let ans = concatenateArrays<string>(["1", "2", "3"], ["4", "5", "6"]);

console.log(ans);


// problem 5


interface Course {
    title: string,
    students: number,
    isPublished: boolean

}



function getPopularCourses(courses: Course[], minStudent: number) {

    let eligible: Course[] = courses.filter((value) => value.isPublished === true && value.students >= minStudent);

    return eligible;
}

// Sample Input:
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];

console.log(getPopularCourses(courses, 80))


// problem 6

