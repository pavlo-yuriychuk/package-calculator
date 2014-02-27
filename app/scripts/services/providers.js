'use strict';

angular.module('packageCalculatorApp')
  .constant('providers', [
    {name: "EMS", maxProcessableWeight: 30, fixedFee: 10, feePerUnit: 1.5},
    {name: "Priority", maxProcessableWeight: 22, fixedFee: 15, feePerUnit: 5},
    {name: "Courier", maxProcessableWeight: 10, fixedFee: 20, feePerUnit: 15}
  ]);
