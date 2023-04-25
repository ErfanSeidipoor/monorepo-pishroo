import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  CUSTOMER_LIST_ROUTE,
  CUSTOMER_DETAILS_ROUTE,
} from "@app/constants/index";
import CustomerDetailsScreen from "./details";
import CustomerListScreen from "./list";

const Stack = createNativeStackNavigator();

export const CustomerScreen: FC = () => {
  return (
    <Stack.Navigator initialRouteName={CUSTOMER_LIST_ROUTE}>
      <Stack.Screen
        options={{ title: "Customer Details", headerShown: false }}
        name={CUSTOMER_DETAILS_ROUTE}
        component={CustomerDetailsScreen}
      />
      <Stack.Screen
        options={{ title: "customers" }}
        name={CUSTOMER_LIST_ROUTE}
        component={CustomerListScreen}
      />
    </Stack.Navigator>
  );
};

export default CustomerScreen;
