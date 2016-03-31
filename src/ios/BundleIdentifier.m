//
//  BundleIdentifier.m
//
//  Created by Calvin Lai on 7/17/13.
//
//

#import "BundleIdentifier.h"
#import <Cordova/CDVViewController.h>

@implementation BundleIdentifier

- (void)get:(CDVInvokedUrlCommand*)command {
    NSString *buildNumber = [[[NSBundle mainBundle] infoDictionary] objectForKey:(NSString*)kCFBundleVersionKey];
    NSString *appVersion = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleShortVersionString"];
    NSString *bundleId = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleIdentifier"];
    NSString *bundleDisplayName = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleDisplayName"];

    NSMutableDictionary *resultDictionary = [NSMutableDictionary dictionary];

    [resultDictionary setObject: buildNumber forKey: @"buildNumber"];
    [resultDictionary setObject: appVersion forKey: @"appVersion"];
    [resultDictionary setObject: bundleId forKey: @"bundleId"];
    [resultDictionary setObject: bundleDisplayName forKey: @"bundleDisplayName"];

    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary: resultDictionary];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end

