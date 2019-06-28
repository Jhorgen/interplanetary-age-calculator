export class CalculateDay {
  constructor(date) {
    this.date = date;
  }
  returnResult() {
    var todayDate = new Date();
    console.log(todayDate);
    var userDate = new Date(this.date);
    console.log(userDate);
    var userAge = todayDate.getFullYear() - userDate.getFullYear();
    var getMonth = todayDate.getMonth() - userDate.getMonth();
    if (getMonth < 0 || (getMonth === 0 && todayDate.getDate() < userDate.getDate()))
    {
      userAge--;
    }
    return userAge
  }
}







// returnResult() {
//   const weekDays = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//   const userDate = new Date(this.date);
//   return weekDays[userDate.getDay()]
// }
