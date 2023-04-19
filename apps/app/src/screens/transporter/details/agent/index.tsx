import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";

import {
  TRANSPORTER_AGENT_DETAILS_ROUTE,
  TRANSPORTER_AGENT_LIST_ROUTE,
} from "@app/constants/index";
import TransporterAgentDetailsScreen from "./details";
import TransporterAgentListScreen from "./list";

const Stack = createNativeStackNavigator();

export const TransporterAgentScreen: FC = () => {
  return (
    <Stack.Navigator initialRouteName={TRANSPORTER_AGENT_LIST_ROUTE}>
      <Stack.Screen
        options={{ title: "Transporter Agent Details" }}
        name={TRANSPORTER_AGENT_DETAILS_ROUTE}
        component={TransporterAgentDetailsScreen}
      />
      <Stack.Screen
        options={{ title: "transporter agent list" }}
        name={TRANSPORTER_AGENT_LIST_ROUTE}
        component={TransporterAgentListScreen}
      />
    </Stack.Navigator>
  );
};

export default TransporterAgentScreen;
