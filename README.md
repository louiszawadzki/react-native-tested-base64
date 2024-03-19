# react-native-tested-base64

A base64 library with android and iOS native tests.

## Testing resources

- [ktlint-gradle](https://github.com/JLLeitschuh/ktlint-gradle)
- [mockito-kotlin](https://github.com/mockito/mockito-kotlin)

## Running tests

First, setup the package:

```sh
yarn
(cd example && yarn)
```

### Android

To run all tests:

```sh
(cd android && ./gradlew clean build)
```

To run only the linter:

```sh
(cd android && ./gradlew ktlintCheck)
```

To fix the linter:

```sh
(cd android && ./gradlew ktlintFormat)
```

To run only the tests:

```sh
(cd android && ./gradlew testDebugUnitTest)
```

### iOS

Open the example project in Xcode `xed example/ios` and run the tests from Test explorer.

## Installation

```sh
npm install react-native-tested-base64
```

## Usage

```js
import { encode } from 'react-native-tested-base64';

// ...

const result = await encode('my string');
const decoded = await decode(result);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
