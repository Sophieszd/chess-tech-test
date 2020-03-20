// I want to be able to make Triangles and define the length of each of their sides.
// I want to be able to check whether the triangle is equilateral, isosceles or scalene. 
// Please write the code to allow me to do this.
// HINTS: - equilateral means 3 sides of the same length
//        - isosceles means 2 sides of the same length, and one different
//        - scalene means 3 sides of different length

// STEP 1: write the function. Input 3 numbers, Output a string
// STEP 2: make one Triangle

class Triangle {
    constructor(sideLength1, sideLength2, sideLength3) {
        this.sideLength1 = sideLength1;
        this.sideLength2 = sideLength2;
        this.sideLength3 = sideLength3
    }
    
}

const triangleChecker = (sideLength1, sideLength2, sideLength3) => {
    if (sideLength1 === sideLength2 === sideLength3) {
        return "equilateral";
    } else if (sideLength1 === sideLength2 !== sideLength3 
            || sideLength2 === sideLength3 !== sideLength1
            || sideLength1 === sideLength3 !== sideLength1) {
        return "isosceles";
    } else {
        return "scalene";
    }
}

// console.log(triangleChecker(2,2,2));
// console.log(triangleChecker(2,2,4));
// console.log(triangleChecker(1,2,4));


// Sunny
class Triangle { 
    constructor(name, x, y, z) {
        this.name = name;
        this.x = x;
        this.y = y; 
        this.z = z;
    }
    triangleChecker(){
        if(this.x === this.y && this.y === this.z){
            return "equilateral";
        } else if(this.x === this.y || this.x === this.z || this.y === this.z ){
            return "isosceles";
        } else {
            return "scalene";
        }
    } 
}
const equal = new Triangle("equal", 50, 50, 50);
const iso = new Triangle("iso", 30, 50, 30);
const scale = new Triangle("scale", 50, 40, 30);
console.log(equal.triangleChecker());
console.log(iso.triangleChecker());
console.log(scale.triangleChecker());
console.log(equal.areaChecker(50, 50, 50))


// Nasir
class Triangle {
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    typeOfTriangle() {
        if(this.x === this.y && this.y === this.z){
            return "equilateral";
        } else if(this.x === this.y || this.x === this.z || this.y === this.z ){
            return "isosceles";
        } else {
            return "scalene";
        }
    }
}  
const triangle = new Triangle(3, 3, 4);
const otherTriangle = new Triangle(2.5, 7, 4);
console.log(triangle.typeOfTriangle());


// Andy

class Triangle {
    constructor(x,y,z) {
        this.sides = [x,y,z];
        this.variants = {
            1: "Equilateral",
            2: "Isosceles",
            3: "Scalene"
        };
    }
    get variant() {
        const uniqueSides = [...new Set(this.sides)];
        return this.variants[uniqueSides.length];
    }
}

const triangle = new Triangle(2,3,5);
console(triangle.variant);