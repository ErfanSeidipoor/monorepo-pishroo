import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";

import {
  PRODUCER_AGENT_DETAILS_ROUTE,
  PRODUCER_AGENT_LIST_ROUTE,
} from "@app/constants/index";
import ProducerAgentDetailsScreen from "./details";
import ProducerAgentListScreen from "./list";

const Stack = createNativeStackNavigator();

export const ProducerAgentScreen: FC = () => {
  return (
    <Stack.Navigator initialRouteName={PRODUCER_AGENT_LIST_ROUTE}>
      <Stack.Screen
        options={{ title: "Producer Agent Details" }}
        name={PRODUCER_AGENT_DETAILS_ROUTE}
        component={ProducerAgentDetailsScreen}
      />
      <Stack.Screen
        options={{ title: "producer agent list" }}
        name={PRODUCER_AGENT_LIST_ROUTE}
        component={ProducerAgentListScreen}
      />
    </Stack.Navigator>
  );
};

export default ProducerAgentScreen;
