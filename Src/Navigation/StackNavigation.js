import React from "react";
import ProductScreen from "../Screens/ProductScreen";
import ProductsStatus from "../Screens/ProductsStatus";
import ProductsUpdate from "../Screens/ProductsUpdate";
import Routes from "../Utilities/Routes";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function StackNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.PRODUCTS} component={ProductScreen} />
      <Stack.Screen name={Routes.PRODUCTS_STATUS} component={ProductsStatus} />
      <Stack.Screen name={Routes.PRODICTS_UPDATE} component={ProductsUpdate} />
    </Stack.Navigator>
  );
}
