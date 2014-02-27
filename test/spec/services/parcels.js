'use strict';

describe('Service: parcels', function () {

  // load the service's module
  beforeEach(module('packageCalculatorApp'));

  // instantiate service
  var parcels;
  beforeEach(inject(function(_parcels_) {
    parcels = _parcels_;
  }));

  it('should do something', function () {
    expect(!!parcels).toBe(true);
  });

});
