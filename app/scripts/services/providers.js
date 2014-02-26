'use strict';

angular.module('packageCalculatorApp')
  .constant('providers', [
    {name: "EMS", maxProcessableWeight: 10, fixedFee: 10, feePerUnit: 10}
  ]);
