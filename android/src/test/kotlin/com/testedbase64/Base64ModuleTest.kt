package com.testedbase64

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.junit.jupiter.api.extension.Extensions
import org.mockito.Mock
import org.mockito.junit.jupiter.MockitoExtension
import org.mockito.kotlin.verify

@Extensions(
  ExtendWith(MockitoExtension::class)
)
internal class Base64ModuleTest {
  @Mock
  lateinit var mockContext: ReactApplicationContext

  @Mock
  lateinit var mockPromise: Promise

  @Test
  fun `encodes given string to base 64`() {
    val module = TestedBase64Module(mockContext)
    module.encode("this is a test", mockPromise)

    verify(mockPromise).resolve("dGhpcyBpcyBhIHRlc3Q=")
  }
}
