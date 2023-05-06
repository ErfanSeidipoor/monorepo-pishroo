import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  PRODUCER_LIST_ROUTE,
  PRODUCER_DETAILS_ROUTE,
} from "@app/constants/index";
import ProducerDetailsScreen from "./details";
import ProducerListScreen from "./list";

const Stack = createNativeStackNavigator();

export const ProducerScreen: FC = () => {
  return (
    <Stack.Navigator initialRouteName={PRODUCER_LIST_ROUTE}>
      <Stack.Screen
        options={{ title: "Producer Details", headerShown: false }}
        name={PRODUCER_DETAILS_ROUTE}
        component={ProducerDetailsScreen}
      />
      <Stack.Screen
        options={{ title: "producers" }}
        name={PRODUCER_LIST_ROUTE}
        component={ProducerListScreen}
      />
    </Stack.Navigator>
  );
};

export default ProducerScreen;
