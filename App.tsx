import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

function App() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setIsToggled(!isToggled)}
        style={{ backgroundColor: 'blue' }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: isToggled ? 'red' : 'transparent',
          }}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
