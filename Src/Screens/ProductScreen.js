import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import Routes from "../Utilities/Routes";
import { useGetAddProductQuery } from "../Redux/Api/ProductApi";

export default function ProductScreen({ navigation }) {
  const { data, isSuccess, refatch } = useGetAddProductQuery();
  const [datas, setDatas] = useState();
  useEffect(() => {
    data?.length > 0 && setDatas(data);
  }, [isSuccess]);
  const renderItem = ({ item }) => {
    //console.log(item);

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
            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.PRODUCTS_STATUS)}
            >
              <Text style={styles.title}>{item.name}</Text>
            </TouchableOpacity>
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
          <Text style={{ textAlign: "center", color: "black" }}>Delete</Text>
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
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.Id}
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
    fontSize: 12,
    color: "black",
  },
  titleDone: {
    fontSize: 16,
    textDecorationLine: "line-through",
    color: "gray",
  },
});
