import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-tested-base64' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const TestedBase64Module = isTurboModuleEnabled
  ? require('./NativeTestedBase64').default
  : NativeModules.TestedBase64;

const TestedBase64 = TestedBase64Module
  ? TestedBase64Module
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function encode(string: string): Promise<string> {
  return TestedBase64.encode(string);
}
export function decode(string: string): Promise<string> {
  return TestedBase64.decode(string);
}
