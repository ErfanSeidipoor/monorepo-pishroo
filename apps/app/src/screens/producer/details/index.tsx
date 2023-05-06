import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  PRODUCER_DETAILS_MAIN_ROUTE,
  PRODUCER_ACTIONS_ROUTE,
  PRODUCER_CREATE_ACTION_ROUTE,
  PRODUCER_ACTION_DETAILS_ROUTE,
  PRODUCER_AGENT_ROUTE,
} from "@app/constants/index";

import ProducerDetailsScreen from "./main";
import ProducerActionsScreen from "./actions";
import ProducerCreateActionScreen from "./createAction";
import CustomeActionDetailsScreen from "./actionDetails";
import Context from "./context";
import useData from "./useDate";
import ProducerAgentScreen from "./agent";

const Stack = createNativeStackNavigator();

export const ProducerScreen: FC = () => {
  const { getProducerLoading, producer, producerId, refetch } = useData();

  return (
    <Context.Provider
      value={{
        getProducerLoading,
        producer,
        producerId,
        refetch,
      }}
    >
      <Stack.Navigator initialRouteName={PRODUCER_DETAILS_MAIN_ROUTE}>
        <Stack.Screen
          options={{ title: "Producer Details" }}
          name={PRODUCER_DETAILS_MAIN_ROUTE}
          component={ProducerDetailsScreen}
        />
        <Stack.Screen
          options={{ title: "Producer Agent", headerShown: false }}
          name={PRODUCER_AGENT_ROUTE}
          component={ProducerAgentScreen}
        />
        <Stack.Screen
          options={{ title: "Producer Action details" }}
          name={PRODUCER_ACTION_DETAILS_ROUTE}
          component={CustomeActionDetailsScreen}
        />
        <Stack.Screen
          options={{ title: "Producer Actions" }}
          name={PRODUCER_ACTIONS_ROUTE}
          component={ProducerActionsScreen}
        />
        <Stack.Screen
          options={{ title: "Producer Create Action" }}
          name={PRODUCER_CREATE_ACTION_ROUTE}
          component={ProducerCreateActionScreen}
        />
      </Stack.Navigator>
    </Context.Provider>
  );
};

export default ProducerScreen;
