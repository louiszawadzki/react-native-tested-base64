package com.testedbase64

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.Promise

abstract class TestedBase64Spec internal constructor(context: ReactApplicationContext) :
  ReactContextBaseJavaModule(context) {

  abstract fun encode(string: String, promise: Promise)
  abstract fun decode(string: String, promise: Promise)
}
