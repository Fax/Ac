export /* @ngInject */ function Underscore($window) {
  return $window._;
};

export /* @ngInject */ function AngularFire($window) {
  return {
    firebase : $window.Firebase,
    service : new $window.Firebase('https://feibrix.firebaseio.com/'),
    profiles : new $window.Firebase('https://feibrix.firebaseio.com/'+'profiles'),
    messages : new $window.Firebase('https://feibrix.firebaseio.com/'+'messages'),
    settings : new $window.Firebase('https://feibrix.firebaseio.com/'+'settings')
  };
};
