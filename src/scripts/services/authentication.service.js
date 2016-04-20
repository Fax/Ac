export default /* @ngInject */ function ($q, 
    $firebaseAuth, 
    AngularFire) { 
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
                    self.user.authStatus = "OK";
                    console.log(self);
                    console.log(authData);
                }).catch(function(error) {
                    self.user.authData = {};
                    self.user.authStatus = error;
                });
            }
            
        };
}