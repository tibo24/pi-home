function fingerprintCheck(){
    FingerprintAuth.isAvailable(function (result) {
        // If has fingerprint device and has fingerprints registered
        if (result.isAvailable == true && result.hasEnrolledFingerprints == true) {
            var encryptConfig = {
                clientId: "Pi-HomeUser",
                username: "appUser",
                password: "appUserPassword",
                maxAttempts: 5,
                locale: "en_US",
                disableBackup: true
            };
            // Set config and success callback
            FingerprintAuth.encrypt(encryptConfig, function(){
                // Error callback
            }, function(){
                navigator.app.exitApp();
            });
        }
    });
};