import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  MESSAGE_LIST_ROUTE,
  MESSAGE_DETAILS_ROUTE,
} from "@app/constants/index";

import MessageDetailsScreen from "./details";
import MessageListScreen from "./list";

const Stack = createNativeStackNavigator();

export const MessageScreen: FC = () => {
  return (
    <Stack.Navigator initialRouteName={MESSAGE_LIST_ROUTE}>
      <Stack.Screen
        options={{ title: "MESSAGE_DETAILS_ROUTE" }}
        name={MESSAGE_DETAILS_ROUTE}
        component={MessageDetailsScreen}
      />
      <Stack.Screen
        options={{ title: "Message Screen" }}
        name={MESSAGE_LIST_ROUTE}
        component={MessageListScreen}
      />
    </Stack.Navigator>
  );
};

export default MessageScreen;
