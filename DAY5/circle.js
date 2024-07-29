class Circle {
 
    constructor(radius = 1.0, color = 'red') {
        this.radius = radius;
        this.color = color;
    }


    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    //  to return string representation of the object
    toString() {
        return `Circle [radius=${this.radius}, color=${this.color}]`;
    }

    //  to calculate area
    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    // to calculate circumference
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

// Example
let circle1 = new Circle();
console.log(circle1.toString()); 

let circle2 = new Circle(2.5);
console.log(circle2.getArea()); 

let circle3 = new Circle(3.5, 'blue');
console.log(circle3.getCircumference()); 
