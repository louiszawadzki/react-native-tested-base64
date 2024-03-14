import * as React from 'react';

import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { encode, decode } from 'react-native-tested-base64';

export default function App() {
  const [result, setResult] = React.useState<{
    encoded: string;
    decoded: string;
  }>({ encoded: '', decoded: '' });

  const input = React.useRef<string>('');

  const onPress = async () => {
    const encoded = await encode(input.current);
    const decoded = await decode(encoded);
    setResult({
      encoded,
      decoded,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput onChangeText={(text) => (input.current = text)} />
      <Button title="compute base64" onPress={onPress} />
      <Text>As base64: {result.encoded}</Text>
      <Text>As decoded base64: {result.decoded}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
