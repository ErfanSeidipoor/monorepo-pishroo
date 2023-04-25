import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  TRANSPORTER_DETAILS_MAIN_ROUTE,
  TRANSPORTER_ACTIONS_ROUTE,
  TRANSPORTER_CREATE_ACTION_ROUTE,
  TRANSPORTER_AGENT_ROUTE,
} from "@app/constants/index";

import TransporterDetailsScreen from "./main";
import TransporterActionsScreen from "./actions";
import TransporterCreateActionScreen from "./createAction";
import TransporterAgentScreen from "./agent";

const Stack = createNativeStackNavigator();

export const TransporterScreen: FC = () => {
  return (
    <Stack.Navigator initialRouteName={TRANSPORTER_DETAILS_MAIN_ROUTE}>
      <Stack.Screen
        options={{ title: "Transporter Details" }}
        name={TRANSPORTER_DETAILS_MAIN_ROUTE}
        component={TransporterDetailsScreen}
      />
      <Stack.Screen
        options={{ title: "Transporter Actions" }}
        name={TRANSPORTER_ACTIONS_ROUTE}
        component={TransporterActionsScreen}
      />
      <Stack.Screen
        options={{ title: "Transporter Agent", headerShown: false }}
        name={TRANSPORTER_AGENT_ROUTE}
        component={TransporterAgentScreen}
      />
      <Stack.Screen
        options={{ title: "Transporter create Action" }}
        name={TRANSPORTER_CREATE_ACTION_ROUTE}
        component={TransporterCreateActionScreen}
      />
    </Stack.Navigator>
  );
};

export default TransporterScreen;
