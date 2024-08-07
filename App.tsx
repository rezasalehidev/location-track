import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LocationUser from './components/LocationUser';
import './tasks';

export default function App() {
  return (
    <View style={styles.container}>
      <LocationUser />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
