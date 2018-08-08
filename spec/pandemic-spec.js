import { Pandemic } from './../src/pandemic.js';

describe('Pandemic', function () {
  let syphillis = new Pandemic("Syphillis");

  beforeEach(function() {
    jasmine.clock().install();
    syphillis.setOutbreak();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and outbreakCounter equal to one', function() {
    expect(syphillis.name).toEqual("Syphillis");
    expect(syphillis.outbreakCounter).toEqual(1);
  });

  it('should have a outbreak level of 2 after 300001 milliseconds', function() {
    jasmine.clock().tick(30001);
    expect(syphillis.outbreakCounter).toEqual(2);
  });

  it('should take over if the outbreakCounter equals 5', function () {
    syphillis.outbreakCounter = 5;
    expect(syphillis.didTheOutbreakTakeOver()).toEqual(true);
  });

  it('should take over if 2min and thirty seconds pass without cure', function() {
    jasmine.clock().tick(150000);
    expect(syphillis.didTheOutbreakTakeOver()).toEqual(true);
  });

  it('should have a outbreak level of decease by 1 if cure action is taken', function() {
    syphillis.outbreakCounter = 3
    syphillis.cureOutbreak()
    expect(syphillis.outbreakCounter).toEqual(2);
  });

  it('should accelerate outbreak level if cure action is taken', function() {
    syphillis.outbreakCounter = 3
    syphillis.cureOutbreak()
    expect(syphillis.outbreakCounter).toEqual(2);
  });

  it('should show all the cities health', function() {
    syphillis.getCitiesStatus()
    expect(syphillis.outbreakCounter).toEqual(2);
  });

  // it('should spread an infection from one city to another if one city has below 6 health', function() {
  //   let syphillis2 = new Pandemic("Syphillis");
  //   syphillis2.cities.Portland = 3
  //   syphillis2.infectionSpread1()
  //   expect(syphillis2.outbreakCounter).toEqual(2);
  // });


})
