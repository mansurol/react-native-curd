import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ProductScreen from "../Screens/ProductScreen";
import ProductsStatus from "../Screens/ProductsStatus";
import ProductsUpdate from "../Screens/ProductsUpdate";
import Routes from "../Utilities/Routes";

export default function StackNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.PRODUCTS} component={ProductScreen} />
      <Stack.Screen name={Routes.PRODUCTS_STATUS} component={ProductsStatus} />
      <Stack.Screen name={Routes.PRODUCTS_STATUS} component={ProductsUpdate} />
    </Stack.Navigator>
  );
}
