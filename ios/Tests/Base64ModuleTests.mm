//
//  Base64ModuleTests.m
//  react-native-tested-base64-Unit-Tests
//
//  Created by Louis Zawadzki on 15/03/2024.
//

#import <XCTest/XCTest.h>
#import "TestedBase64.h"

@interface MockPromise : NSObject

@property id result;

- (RCTPromiseResolveBlock)getPromise;

@end

@implementation MockPromise

id result = nil;

- (RCTPromiseResolveBlock)getPromise {
    __block MockPromise *blocksafeSelf = self;
    RCTPromiseResolveBlock resolve = ^ (id result) {
        blocksafeSelf.result = result;
    };
    return resolve;
}

@end


@interface Base64ModuleTests : XCTestCase

@end

@implementation Base64ModuleTests

- (void)setUp {
    // Put setup code here. This method is called before the invocation of each test method in the class.
}

- (void)tearDown {
    // Put teardown code here. This method is called after the invocation of each test method in the class.
}

- (void)testExample {
    MockPromise *promiseMock = [MockPromise alloc];
    RCTPromiseRejectBlock rejectMock = {};
    
    TestedBase64 *testedModule = [TestedBase64 alloc];
    [testedModule encode:@"this is a test" resolve:[promiseMock getPromise] reject:rejectMock];
    
    XCTAssertEqual(@"dGhpcyBpcyBhIHRlc3Q=", promiseMock.result);
}

@end

