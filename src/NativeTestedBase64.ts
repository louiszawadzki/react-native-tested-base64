import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  encode(string: string): Promise<string>;
  decode(string: string): Promise<string>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('TestedBase64');
