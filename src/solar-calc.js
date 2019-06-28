export class CalculateDay {
  constructor(date) {
    this.date = date;
  }
  returnResult() {
    var today = new Date();
    console.log(today);
    var userDate = new Date(this.date);
    console.log(userDate);
    var age = today.getFullYear() - userDate.getFullYear();
    var m = today.getMonth() - userDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < userDate.getDate()))
    {
      age--;
    }
    return age;
  }
}







// returnResult() {
//   const weekDays = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//   const userDate = new Date(this.date);
//   return weekDays[userDate.getDay()]
// }
