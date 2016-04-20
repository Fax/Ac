export default /* @ngInject */ function ($q, 
    $firebaseAuth, 
    AngularFire,
    dataService) { 
        return {
            user: {
                authData : {},
                authStatus: ""
            },
            facebookAuth : function(){
                var self = this;
                var authObject = $firebaseAuth(AngularFire.service);
                authObject.$authWithOAuthPopup("facebook")
                .then(function(authData) {
                    self.user.authData = authData;
                    self.user.authStatus = "OK";
                }).catch(function(error) {
                    self.user.authData = {};
                    self.user.authStatus = error;
                });
            },
            googleAuth : function(){
                var self = this;
                var authObject = $firebaseAuth(AngularFire.service);
                authObject.$authWithOAuthPopup("google",{
                    remember: "sessionOnly",
                    scope: "email"
                    })
                .then(function(authData) {
                    self.user.authData = authData;
                    self.user.userId = authData.uid;
                    self.user.authStatus = "OK";
                    self.user.profile = dataService.getProfile(authData.uid);
                    console.log(self);
                    console.log(authData);
                }).catch(function(error) {
                    self.user.authData = {};
                    self.user.authStatus = error;
                });
            }
            
        };
}