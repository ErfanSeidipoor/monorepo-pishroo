import {
  CUSTOMER_ACTIONS_ROUTE,
  CUSTOMER_CREATE_ACTION_ROUTE,
} from "@app/constants";
import { FC } from "react";
import { StyleSheet, Text, SafeAreaView, Button } from "react-native";

export const CustomerDeatilsScreen: FC<{ navigation }> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>CustomerDeatilsScreen</Text>
      <Button
        title="Go to Customer Actions"
        onPress={() => navigation.navigate(CUSTOMER_ACTIONS_ROUTE)}
      />
      <Button
        title="Go to Create Action"
        onPress={() => navigation.navigate(CUSTOMER_CREATE_ACTION_ROUTE)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});

export default CustomerDeatilsScreen;
