'use strict';

describe('Service: prices', function () {

  // load the service's module
  beforeEach(module('packageCalculatorApp'));

  // instantiate service
  var prices;
  beforeEach(inject(function (_prices_) {
    prices = _prices_;
  }));

  it('should do something', function () {
    expect(!!prices).toBe(true);
  });

});
