'use strict';

describe('Service: Calculator', function () {

  // load the service's module
  beforeEach(module('packageCalculatorApp'));

  // instantiate service
  var Calculator;
  var parcels;
  beforeEach(inject(function(_Calculator_, _parcels_) {
    Calculator = _Calculator_;
    parcels = _parcels_;
  }));

  it('should handle unknown provider', function () {
    var parcel = parcels.create();
    parcel.deliveryServiceProvider = "TNT";
    var calculate = _.partial(Calculator.calculate, parcel)
    expect(calculate).toThrow();
  });

  it('should handle overweight', function () {
    var parcel = parcels.create();
    parcel.deliveryServiceProvider = "EMS";
    parcel.weight = 100;
    var calculate = _.partial(Calculator.calculate, parcel);
    expect(calculate).toThrow();
  });

});
