import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-elements";
import Routes from "../Utilities/Routes";

export default function ProductsStatus({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>this is first title</Text>
      <Text style={styles.status}>Status: Not Completed</Text>

      <Button title={"Mark as Completed"} style={{ margin: 3 }} />
      {/* todo.completed ? "Mark as Not Completed" : */}
      {/* todo.completed ? "Completed" : "Not Completed" */}
      <Button
        title="Edit"
        style={{ margin: 3 }}
        onPress={() => navigation.navigate(Routes.PRODICTS_UPDATE)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
  },
  status: {
    fontSize: 18,
    color: "gray",
  },
});
