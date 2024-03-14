package com.testedbase64

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod

class TestedBase64Module internal constructor(context: ReactApplicationContext) :
  TestedBase64Spec(context) {

  override fun getName(): String {
    return NAME
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  override fun encode(string: String, promise: Promise) {
    promise.resolve(string)
  }

  @ReactMethod
  override fun decode(string: String, promise: Promise) {
    promise.resolve(string)
  }

  companion object {
    const val NAME = "TestedBase64"
  }
}
