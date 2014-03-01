'use strict';

describe('Service: companyData', function () {

  // load the service's module
  beforeEach(module('packageCalculatorApp'));

  // instantiate service
  var companyData;
  beforeEach(inject(function (_companyData_) {
    companyData = _companyData_;
  }));

  it('should do something', function () {
    expect(companyData.fee).toBeDefined();
  });

});
