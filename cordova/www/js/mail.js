$("#mail").click(function() {
    cordova.plugins.email.addAlias('gmail', 'com.google.android.gm');
    cordova.plugins.email.open({
        app: 'gmail',
        to: 'tibovermunicht@hotmail.com',
        subject: 'Info app'
    })
});