import { CalculateAge } from './../src/solar-calc.js';

describe( 'CalculateAge', function() {

  it('should test whether or not the planet choice changes output', function() {
    var age = new CalculateAge('05-09-1992', '1');
    //1~4 depending on planet choice
    expect(age.calculatePlanet()).toEqual(112.5);
    //test does not include Math.round
  });

  it('should test whether or not the user age is being returned ', function() {
    var age = new CalculateAge('05-09-19');
    expect(age.returnResult()).toEqual(0);
  });
});
