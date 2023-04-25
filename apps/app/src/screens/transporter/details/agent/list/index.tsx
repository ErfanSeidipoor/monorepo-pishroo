import { TRANSPORTER_AGENT_DETAILS_ROUTE } from "@app/constants";
import { FC } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

export const TransporterAgentListScreen: FC<{ navigation }> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>TransporterAgentListScreen</Text>
      <Button
        title="Go to TransporterAgent details"
        onPress={() => navigation.navigate(TRANSPORTER_AGENT_DETAILS_ROUTE)}
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

export default TransporterAgentListScreen;
