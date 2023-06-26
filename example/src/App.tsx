import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import { multiply } from 'react-native-popup-message';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>(0);

  const multiplyhandle = () => {
    multiply(Math.random(), Math.random()).then(setResult);
  };

  const resethandle = () => {
    setResult(0);
  };

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Button
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        title="multiply"
        onPress={multiplyhandle}
      />
      <Button
        color="red"
        accessibilityLabel="Learn more about this purple button"
        title="reset"
        onPress={resethandle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
