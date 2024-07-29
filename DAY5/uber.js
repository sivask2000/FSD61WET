class UberRide {
    constructor(baseFare, costPerMile, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
    }

    calculateFare(distance, duration) {
        return this.baseFare + (this.costPerMile * distance) + (this.costPerMinute * duration);
    }

    toString() {
        return `UberRide [baseFare=${this.baseFare}, costPerMile=${this.costPerMile}, costPerMinute=${this.costPerMinute}]`;
    }
}

let uberRide = new UberRide(2.50, 1.75, 0.25);
console.log(uberRide.calculateFare(10, 15)); // Example usage
console.log(uberRide.toString());
