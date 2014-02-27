'use strict';

angular.module('packageCalculatorApp')
  .service('Calculator', ['providers', 'companyData', function Calculator(providers, companyData) {

    this.calculate = function (item) {
      var providerName = item.value("deliveryServiceProvider");
      if (providerName) {
        var provider = _.findWhere(providers, {name: providerName});
        var weight = item.value("weight");
        if (provider) {
          if (weight > provider.maxProcessableWeight) {
            throw new Error("Can not process that weight");
          } else {
            return companyData.fee + provider.fixedFee + weight * provider.feePerUnit;
          };
        };
        throw new Error("Unknown provider");
      } else {
        return null;
      }
    };

  }]);
