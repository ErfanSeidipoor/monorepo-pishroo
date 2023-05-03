import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  TRANSPORTER_LIST_ROUTE,
  TRANSPORTER_DETAILS_ROUTE,
} from "@app/constants/index";
import TransporterDetailsScreen from "./details";
import TransporterListScreen from "./list";

const Stack = createNativeStackNavigator();

export const TransporterScreen: FC = () => {
  return (
    <Stack.Navigator initialRouteName={TRANSPORTER_LIST_ROUTE}>
      <Stack.Screen
        options={{ title: "Transporter Details", headerShown: false }}
        name={TRANSPORTER_DETAILS_ROUTE}
        component={TransporterDetailsScreen}
      />
      <Stack.Screen
        options={{ title: "transporters" }}
        name={TRANSPORTER_LIST_ROUTE}
        component={TransporterListScreen}
      />
    </Stack.Navigator>
  );
};

export default TransporterScreen;
