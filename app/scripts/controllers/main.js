'use strict';

angular.module('packageCalculatorApp')
  .controller('MainCtrl', ['$scope', 'providers', 'Calculator', 'parcels', function ($scope, providers, Calculator, parcels) {
    $scope.providers = providers;
    $scope.parcel = parcels.create();

    $scope.calculate = function (parcel) {
      $scope.error = "";
      try {
        return Calculator.calculate(parcel);
      } catch (e) {
        $scope.error = e.message;
        return null
      }
    };

  }]);
