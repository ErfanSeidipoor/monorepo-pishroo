import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  CALL_LIST_ROUTE,
  CALL_DETAILS_ROUTE,
  CALL_CREATE_ROUTE,
} from "@app/constants/index";

import CallDetailsScreen from "./details";
import CreateCallScreen from "./create";
import CallListScreen from "./list";

const Stack = createNativeStackNavigator();

export const CallScreen: FC = () => {
  return (
    <Stack.Navigator initialRouteName={CALL_LIST_ROUTE}>
      <Stack.Screen
        options={{ title: "CALL_DETAILS_ROUTE" }}
        name={CALL_DETAILS_ROUTE}
        component={CallDetailsScreen}
      />
      <Stack.Screen
        options={{ title: "Call Screen" }}
        name={CALL_LIST_ROUTE}
        component={CallListScreen}
      />
      <Stack.Screen
        options={{ title: "Create Call Screen" }}
        name={CALL_CREATE_ROUTE}
        component={CreateCallScreen}
      />
    </Stack.Navigator>
  );
};

export default CallScreen;
