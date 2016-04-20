
import { Underscore, AngularFire } from './services/vendor.lib';

import Main from './directives/main';
import DataService from './services/data.service';
import AuthenticationService from './services/authentication.service';
import Board from './directives/board';

angular.module('angularchess', ['firebase'])
    .factory('_', Underscore)
    .factory('AngularFire', AngularFire)
    .service('dataService', DataService)
    .service('authenticationService', AuthenticationService)

    .directive('faxMain',Main)
    .directive('board',Board)
    .filter('htmlTrust', ['$sce', function($sce) {
      return $sce.trustAsHtml;
    }]);

