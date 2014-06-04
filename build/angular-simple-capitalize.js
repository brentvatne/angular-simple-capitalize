(function(window, angular, undefined) {'use strict';

angular.module('bv.simple-capitalize', [])
  .filter('capitalize', function() {
    return function(str) {
      if (angular.isString(str)) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      } else {
        return '';
      }
    };
  });

})(window, window.angular);
