export default /* @ngInject */ function ($q, $firebaseObject, $firebaseArray, AngularFire) { 
    return {
        messages : $firebaseArray(AngularFire.messages),
        getProfile : function(profileUID) {
            var profile =  $firebaseObject(AngularFire.profiles.child(profileUID));
            if(!profile.uid){
                profile.uid = profileUID;
                profile.points = 0;
                profile.$save();
            };
            return profile;     
        }
    };
}
