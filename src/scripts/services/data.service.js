export default /* @ngInject */ function ($q, $firebaseObject, $firebaseArray, AngularFire) { 
    return {
        messages : $firebaseArray(AngularFire.messages)
    };
}
