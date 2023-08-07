import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigation from "./Src/Navigation/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StackNavigation />
        <StatusBar style="auto" />
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
