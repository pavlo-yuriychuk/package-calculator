'use strict';

angular.module('packageCalculatorApp')
  .factory('parcels', [function() {

    function Parcel() {
      this.weight = 0;
      this.width = 0;
      this.length = 0;
      this.height = 0;
      this.deliveryServiceProvider = "";
    };

    Parcel.prototype.value = function (name) {
      var result;
      if (/^(weight|width|length|height)$/.test(name)) {
        try {
          result = parseFloat(this[name]);
        } catch (e) {
          return null;
        }
        return result;
      } else if (name === "deliveryServiceProvider") {
        return this.deliveryServiceProvider;
      } else {
        return null;
      }
    }

    // Public API here
    return {
      create: function() {
        return new Parcel()
      }
    };
  }]);
