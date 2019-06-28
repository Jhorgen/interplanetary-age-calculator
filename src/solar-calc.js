export class CalculateDay {
  constructor(date) {
    this.date = date;
  }
  returnResult() {
    const userDate = new Date(this.date);
    var currentYear = userDate.getFullYear();
    return currentYear;
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
//
// }
