export class CalculateDay {
  constructor(date, planet) {
    this.date = date;
    this.planet = planet;
    console.log(planet);
  }

  returnResult() {
    const todayDate = new Date();
    console.log(todayDate);
    const userDate = new Date(this.date);
    console.log(userDate);
    let userAge = todayDate.getFullYear() - userDate.getFullYear();
    const getMonth = todayDate.getMonth() - userDate.getMonth();
    const newPlanet = new CalculateDay(this.planet);
    if (this.planet === "1" && getMonth < 0 || (getMonth === 0 && todayDate.getDate() < userDate.getDate()))
    {
      userAge--;
    }
    return userAge
  }
}
