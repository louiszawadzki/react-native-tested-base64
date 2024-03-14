
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNTestedBase64Spec.h"

@interface TestedBase64 : NSObject <NativeTestedBase64Spec>
#else
#import <React/RCTBridgeModule.h>

@interface TestedBase64 : NSObject <RCTBridgeModule>
#endif

@end
