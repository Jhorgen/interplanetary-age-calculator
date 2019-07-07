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
    console.log(todayDate);
    const userDate = new Date(this.complete);
    console.log(userDate);
    let userAge = todayDate.getFullYear() - userDate.getFullYear();
    const getMonth = todayDate.getMonth() - userDate.getMonth();
    if (getMonth < 0 || (getMonth === 0 && todayDate.getDate() < userDate.getDate()))
    {
      userAge--;
      console.log(userAge)

    }
    return userAge
  }

  calculatePlanet() {
    let planetAge = new CalculateAge();
    console.log(planetAge);
    if (planetAge.planet === "undefined") {
      console.log("hello");
    } else {
      console.log("no");
    }

  }
}
