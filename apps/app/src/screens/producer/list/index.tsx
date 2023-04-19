import { PRODUCER_DETAILS_ROUTE } from "@app/constants";
import { FC } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

export const ProducerListScreen: FC<{ navigation }> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Producer ListScreen</Text>
      <Button
        title="Go to ProducerListdetails"
        onPress={() => navigation.navigate(PRODUCER_DETAILS_ROUTE)}
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

export default ProducerListScreen;
