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
