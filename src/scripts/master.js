
import { Underscore, AngularFire } from './services/vendor.lib';

import Main from './directives/main';

angular.module('angularchess', ['firebase'])
    .factory('_', Underscore)
    .factory('AngularFire', AngularFire)
    .directive('faxMain',Main)
    .filter('htmlTrust', ['$sce', function($sce) {
      return $sce.trustAsHtml;
    }]);

