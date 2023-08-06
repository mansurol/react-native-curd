import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductScreen from "./Src/Screens/ProductScreen";

export default function App() {
  return (
    <View>
      <ProductScreen />
      <StatusBar style="auto" />
    </View>
  );
}
