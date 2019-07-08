export class CalculateAge {
  constructor(complete, planet) {
    this.complete = complete;
    this.planet = planet;
    this.mercury = .24;
    this.venus = .62;
    this.mars = 1.88;
    this.jupiter = 11.86;
  }


  returnResult() {
    const todayDate = new Date();
    const userDate = new Date(this.complete);
    let userAge = todayDate.getFullYear() - userDate.getFullYear();
    return userAge;
  };


  calculatePlanet() {
    let calculatedAge = this.returnResult();
    if (this.planet === "1") {
      return calculatedAge / this.mercury
    } else if (this.planet === "2") {
      return calculatedAge / this.venus;
    } else if (this.planet === "3") {
      return calculatedAge / this.mars;
    } else if (this.planet === "4") {
      return calculatedAge / this.jupiter;
    }
  }

  calculateLifeExpectancy() {
    let userAge = this.returnResult();
    let newAge = 90 - userAge;
    if (this.planet === "1") {
      return newAge / this.mercury;
    } else if (this.planet === "2") {
      return newAge / this.venus;
    } else if (this.planet === "3") {
      return newAge / this.mars;
    } else if (this.planet === "4") {
      return newAge / this.jupiter;
    }
  }
}
