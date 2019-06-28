import { CalculateDay } from './../src/solar-calc.js';

describe( 'CalculateDay', function() {

  it('should test whether the date input outputs the correct day', function() {
    var userDate = new CalculateDay('6/29/2019');
    expect(userDate.returnResult()).toEqual('Saturday');
  });
//   it('should test whether the date input outputs the correct day', function() {
//     var userDate = new CalculateDay('6/27/2019');
//     expect(userDate.returnResult()).toEqual('Thursday');
  });
// });
