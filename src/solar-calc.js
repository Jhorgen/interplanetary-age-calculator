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
    console.log(userAge);
    const todayDate = new Date();
    console.log(todayDate);
    const userDate = new Date(this.complete);
    console.log(userDate);
    let userAge = todayDate.getFullYear() - userDate.getFullYear();
    const getMonth = todayDate.getMonth() - userDate.getMonth();
    if (getMonth < 0 || (getMonth === 0 && todayDate.getDate() < userDate.getDate()))
    {

      userAge--;
      console.log(userAge);

    }
    return userAge;
  }


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

  calculateLife() {
    let userAge = this.returnResult();
    let lifeExpectancy = this.calculatePlanet();

    for(var i = 85; i > userAge; i++)
    console.log(i);

  }

}
