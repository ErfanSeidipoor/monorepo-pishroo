import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";

import {
  TRANSPORTER_DETAILS_ROUTE,
  TRANSPORTER_LIST_ROUTE,
} from "@app/constants/index";
import ProductDetailsScreen from "./details";
import ProductListScreen from "./list";

const Stack = createNativeStackNavigator();

export const TransporterScreen: FC = () => {
  return (
    <Stack.Navigator initialRouteName={TRANSPORTER_LIST_ROUTE}>
      <Stack.Screen
        options={{ title: "transporter details", headerShown: false }}
        name={TRANSPORTER_DETAILS_ROUTE}
        component={ProductDetailsScreen}
      />
      <Stack.Screen
        options={{ title: "transporter list" }}
        name={TRANSPORTER_LIST_ROUTE}
        component={ProductListScreen}
      />
    </Stack.Navigator>
  );
};

export default TransporterScreen;
