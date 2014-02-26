'use strict';

angular.module('packageCalculatorApp')
  .service('Calculator', ['providers', 'companyData', function Calculator(providers, companyData) {

    this.calculate = function (item, providerName) {
      var provider = _.findWhere(providers, {name: providerName});
      if (provider) {
        if (item.weight > provider.maxProcessableWeight) {
          throw new Error("Can not process that weight");
        } else {
          return companyData.fee + provider.fee + item.weight * provider.feePerUnit;
        };
      };
      throw new Error("Unknown provider");
    };

  }]);
