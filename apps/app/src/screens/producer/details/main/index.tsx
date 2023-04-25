import {
  PRODUCER_ACTIONS_ROUTE,
  PRODUCER_AGENT_ROUTE,
  PRODUCER_CREATE_ACTION_ROUTE,
} from "@app/constants";
import { FC } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

export const ProducerDeatilsScreen: FC<{ navigation }> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Producer Deatils Screen</Text>
      <Button
        title="Go to Producer Actions"
        onPress={() => navigation.navigate(PRODUCER_ACTIONS_ROUTE)}
      />
      <Button
        title="Go to Create Action"
        onPress={() => navigation.navigate(PRODUCER_CREATE_ACTION_ROUTE)}
      />
      <Button
        title="Producer Agent"
        onPress={() => navigation.navigate(PRODUCER_AGENT_ROUTE)}
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

export default ProducerDeatilsScreen;
