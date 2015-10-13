


//var cordova = require('cordova'),
//    exec = require('cordova/exec');

var BundleIdentifier = function () {
    // constructor
};

//Interface...


BundleIdentifier.prototype.get = function (options, success, error) {
    cordova.exec(success, error, "BundleIdentifier", "get", options ? [options] : []);
};

var bundleIdentifier = new BundleIdentifier();

module.exports = bundleIdentifier;


//Implementation
cordova.commandProxy.add("BundleIdentifier", {
    get: function (successCallback, errorCallback, strInput) {
        var result = {};
        result.bundleId = undefined;
        //console.log("ENTER - BundleIdentifier.get function");

        if (Windows && Windows.ApplicationModel) {
            var pckg = Windows.ApplicationModel.Package.current;
            result.bundleId = pckg.id.fullName;

            successCallback(result);
        } else {
            errorCallback(result);
        }

        //console.log("EXIT - BundleIdentifier.get function");
    }
});