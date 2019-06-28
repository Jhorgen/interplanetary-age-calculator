export class CalculateDay {
  constructor(date) {
    this.date = date;
  }
  returnResult() {
    const weekDays = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const userDate = new Date(this.date);
    return weekDays[userDate.getDay()]
  }
}


// calculateAgeInYears (date) {
//   var userDate = new Date(this.date);
//   var currentYear = userDate.getFullYear();
//   var yearDiff = currentYear - date.getFullYear();
//   var birthday = new Date(currentYear, date.getMonth(), date.getDate());
//   var resultDate = (userDate >= birthday);
//
//   ? yearDiff
//   : yearDiff - 1;
//   return resultDate

// }
