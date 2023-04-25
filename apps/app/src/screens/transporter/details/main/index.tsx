import {
  TRANSPORTER_ACTIONS_ROUTE,
  TRANSPORTER_AGENT_ROUTE,
  TRANSPORTER_CREATE_ACTION_ROUTE,
} from "@app/constants";
import { FC } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

export const TransporterDeatilsScreen: FC<{ navigation }> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Transporter Deatils Screen</Text>
      <Button
        title="Go to Transporter Actions"
        onPress={() => navigation.navigate(TRANSPORTER_ACTIONS_ROUTE)}
      />
      <Button
        title="Go to Create Action"
        onPress={() => navigation.navigate(TRANSPORTER_CREATE_ACTION_ROUTE)}
      />
      <Button
        title="Transporter Agent"
        onPress={() => navigation.navigate(TRANSPORTER_AGENT_ROUTE)}
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

export default TransporterDeatilsScreen;
