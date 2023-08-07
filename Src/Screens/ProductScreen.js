import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import Routes from "../Utilities/Routes";

const data = [
  {
    Id: "1",
    Title: "this my first post",
  },
  {
    Id: "2",
    Title: "this my second post",
  },
];
export default function ProductScreen({ navigation }) {
  const renderItem = ({ item }) => {
    console.log(item);

    return (
      <Pressable
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View
              style={styles.circle} //item.completed ? styles.circleDone : item.completed ? styles.TitleBlur :
            />
            <Text style={styles.title}>{item.Title}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "tomato",
            padding: 8,
            width: 65,
            borderRadius: 5,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>Delete</Text>
        </TouchableOpacity>
      </Pressable>
    );
  };
  return (
    <SafeAreaView>
      <Text style={{ textAlign: "center", fontSize: 18, margin: 15 }}>
        Products List
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.Id.toString()}
        // onRefresh={refetch}
        // refreshing={isFetching}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.PRODUCTS_STATUS)}
      >
        <Text style={{ color: "blue", textAlign: "center" }}>Add Product</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "gray",
    marginRight: 8,
    marginTop: 3,
  },
  circleDone: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "green",
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    color: "black",
  },
  titleDone: {
    fontSize: 16,
    textDecorationLine: "line-through",
    color: "gray",
  },
});
