import { View, Text, TextInput } from "react-native";
import React from "react";
import { Button } from "react-native-elements";

export default function ProductsUpdate() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        //defaultValue={"title"}
        onChangeText={(text) => setTitle(text)}
        placeholder="Enter Product Title"
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
        }}
      />
      <Button title="Update" />
    </View>
  );
}
