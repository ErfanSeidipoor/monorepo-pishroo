import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";

import {
  LOGIN_ROUTE,
  PRODUCT_ROUTE,
  CUSTOMER_ROUTE,
  TRANSPORTER_ROUTE,
  PRODUCER_ROUTE,
  MESSAGE_ROUTE,
  PHONENUMBER_ROUTE,
  LOGOUT_ROUTE,
  PROFILE_ROUTE,
} from "@app/constants/index";

import { useUser } from "@app/hooks";

import LoginScreen from "./login";
import ProductScreen from "./product";
import CustomerScreen from "./customer";
import TransporterScreen from "./transporter";
import ProducerScreen from "./producer";
import MessageScreen from "./message";
import PhonenumberScreen from "./phonenumber";
import LogoutScreen from "./logout";
import ProfileScreen from "./profile";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export const Navigation: FC = () => {
  const { isLogin } = useUser();

  return (
    <NavigationContainer>
      {isLogin ? (
        <Drawer.Navigator initialRouteName={PROFILE_ROUTE}>
          <Drawer.Screen
            options={{ title: "profile" }}
            name={PROFILE_ROUTE}
            component={ProfileScreen}
          />
          <Drawer.Screen
            options={{ title: "product", headerShown: false }}
            name={PRODUCT_ROUTE}
            component={ProductScreen}
          />
          <Drawer.Screen
            options={{ title: "message", headerShown: false }}
            name={MESSAGE_ROUTE}
            component={MessageScreen}
          />
          <Drawer.Screen
            options={{ title: "customer", headerShown: false }}
            name={CUSTOMER_ROUTE}
            component={CustomerScreen}
          />
          <Drawer.Screen
            options={{ title: "transporter", headerShown: false }}
            name={TRANSPORTER_ROUTE}
            component={TransporterScreen}
          />
          <Drawer.Screen
            options={{ title: "producer", headerShown: false }}
            name={PRODUCER_ROUTE}
            component={ProducerScreen}
          />
          <Drawer.Screen
            options={{ title: "new Phonenumber" }}
            name={PHONENUMBER_ROUTE}
            component={PhonenumberScreen}
          />
          <Drawer.Screen
            options={{ title: "logout" }}
            name={LOGOUT_ROUTE}
            component={LogoutScreen}
          />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{ title: "Login" }}
            name={LOGIN_ROUTE}
            component={LoginScreen}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
