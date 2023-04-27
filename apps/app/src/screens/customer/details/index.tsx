import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CUSTOMER_DETAILS_MAIN_ROUTE,
  CUSTOMER_ACTIONS_ROUTE,
  CUSTOMER_CREATE_ACTION_ROUTE,
} from "@app/constants/index";

import CustomerDetailsScreen from "./main";
import CustomerActionsScreen from "./actions";
import CustomerCreateActionScreen from "./createAction";
import Context from "./context";
import useData from "./useDate";

const Stack = createNativeStackNavigator();

export const CustomerScreen: FC = () => {
  const { getCustomerLoading, customer, customerId, refetch } = useData();

  return (
    <Context.Provider
      value={{
        getCustomerLoading,
        customer,
        customerId,
        refetch,
      }}
    >
      <Stack.Navigator initialRouteName={CUSTOMER_DETAILS_MAIN_ROUTE}>
        <Stack.Screen
          options={{ title: "Customer Details" }}
          name={CUSTOMER_DETAILS_MAIN_ROUTE}
          component={CustomerDetailsScreen}
        />
        <Stack.Screen
          options={{ title: "Customer Actions" }}
          name={CUSTOMER_ACTIONS_ROUTE}
          component={CustomerActionsScreen}
        />
        <Stack.Screen
          options={{ title: "Customer Create Action" }}
          name={CUSTOMER_CREATE_ACTION_ROUTE}
          component={CustomerCreateActionScreen}
        />
      </Stack.Navigator>
    </Context.Provider>
  );
};

export default CustomerScreen;
