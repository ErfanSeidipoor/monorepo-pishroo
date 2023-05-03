import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  TRANSPORTER_DETAILS_MAIN_ROUTE,
  TRANSPORTER_ACTIONS_ROUTE,
  TRANSPORTER_CREATE_ACTION_ROUTE,
  TRANSPORTER_ACTION_DETAILS_ROUTE,
  TRANSPORTER_AGENT_ROUTE,
} from "@app/constants/index";

import TransporterDetailsScreen from "./main";
import TransporterActionsScreen from "./actions";
import TransporterCreateActionScreen from "./createAction";
import CustomeActionDetailsScreen from "./actionDetails";
import Context from "./context";
import useData from "./useDate";
import TransporterAgentScreen from "./agent";

const Stack = createNativeStackNavigator();

export const TransporterScreen: FC = () => {
  const { getTransporterLoading, transporter, transporterId, refetch } = useData();

  return (
    <Context.Provider
      value={{
        getTransporterLoading,
        transporter,
        transporterId,
        refetch,
      }}
    >
      <Stack.Navigator initialRouteName={TRANSPORTER_DETAILS_MAIN_ROUTE}>
        <Stack.Screen
          options={{ title: "Transporter Details" }}
          name={TRANSPORTER_DETAILS_MAIN_ROUTE}
          component={TransporterDetailsScreen}
        />
        <Stack.Screen
          options={{ title: "Transporter Agent", headerShown: false }}
          name={TRANSPORTER_AGENT_ROUTE}
          component={TransporterAgentScreen}
        />
        <Stack.Screen
          options={{ title: "Transporter Action details" }}
          name={TRANSPORTER_ACTION_DETAILS_ROUTE}
          component={CustomeActionDetailsScreen}
        />
        <Stack.Screen
          options={{ title: "Transporter Actions" }}
          name={TRANSPORTER_ACTIONS_ROUTE}
          component={TransporterActionsScreen}
        />
        <Stack.Screen
          options={{ title: "Transporter Create Action" }}
          name={TRANSPORTER_CREATE_ACTION_ROUTE}
          component={TransporterCreateActionScreen}
        />
      </Stack.Navigator>
    </Context.Provider>
  );
};

export default TransporterScreen;
