import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";

import {
  PRODUCER_DETAILS_ROUTE,
  PRODUCER_LIST_ROUTE,
} from "@app/constants/index";
import ProductDetailsScreen from "./details";
import ProductListScreen from "./list";

const Stack = createNativeStackNavigator();

export const ProducerScreen: FC = () => {
  return (
    <Stack.Navigator initialRouteName={PRODUCER_LIST_ROUTE}>
      <Stack.Screen
        options={{ title: "producer details", headerShown: false }}
        name={PRODUCER_DETAILS_ROUTE}
        component={ProductDetailsScreen}
      />
      <Stack.Screen
        options={{ title: "producer list" }}
        name={PRODUCER_LIST_ROUTE}
        component={ProductListScreen}
      />
    </Stack.Navigator>
  );
};

export default ProducerScreen;
