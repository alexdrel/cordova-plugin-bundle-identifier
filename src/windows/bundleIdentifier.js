
var BundleIdentifier = function () {
};


BundleIdentifier.prototype.get = function (options, success, error) {
    cordova.exec(success, error, "BundleIdentifier", "get", options ? [options] : []);
};

var bundleIdentifier = new BundleIdentifier();

module.exports = bundleIdentifier;

cordova.commandProxy.add("BundleIdentifier", {
    get: function (successCallback, errorCallback, strInput) {
        var result = {};
        result.bundleId = undefined;
        if (Windows && Windows.ApplicationModel) {
            var pckg = Windows.ApplicationModel.Package.current;
            result.bundleId = pckg.id.fullName;

            successCallback(result);
        } else {
            errorCallback(result);
        }
    }
});