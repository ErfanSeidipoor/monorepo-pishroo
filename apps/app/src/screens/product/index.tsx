import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  PRODUCT_LIST_ROUTE,
  PRODUCT_DETAILS_ROUTE,
} from "@app/constants/index";
import ProductDetailsScreen from "./details";
import ProductListScreen from "./list";

const Stack = createNativeStackNavigator();

export const ProductScreen: FC = () => {
  return (
    <Stack.Navigator initialRouteName={PRODUCT_LIST_ROUTE}>
      <Stack.Screen
        options={{ title: "PRODUCT_DETAILS_ROUTE" }}
        name={PRODUCT_DETAILS_ROUTE}
        component={ProductDetailsScreen}
      />
      <Stack.Screen
        options={{ title: "ProductsScreen" }}
        name={PRODUCT_LIST_ROUTE}
        component={ProductListScreen}
      />
    </Stack.Navigator>
  );
};

export default ProductScreen;
