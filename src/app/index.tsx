
import { Text, View, StyleSheet } from 'react-native';

export default function app() {
  return (
    <View style={styles.container}>
        <Text > Expo API Route</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
});