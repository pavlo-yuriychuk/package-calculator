'use strict';

describe('Service: providers', function () {

  // load the service's module
  beforeEach(module('packageCalculatorApp'));

  // instantiate service
  var providers;
  beforeEach(inject(function (_providers_) {
    providers = _providers_;
  }));

  it('should have entry for EMS', function () {
    expect(_.findWhere({name: "EMS"})).toBeDefined();
  });

  it('should have entry for Courier', function () {
    expect(_.findWhere({name: "Courier"})).toBeDefined();
  });

  it('should have entry for Courier', function () {
    expect(_.findWhere({name: "Priority"})).toBeDefined();
  });

});
