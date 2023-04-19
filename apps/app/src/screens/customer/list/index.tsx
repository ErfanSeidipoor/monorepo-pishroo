import { CUSTOMER_DETAILS_ROUTE } from "@app/constants";
import { FC } from "react";
import { StyleSheet, Text, SafeAreaView, Button } from "react-native";

export const CustomersScreen: FC<{ navigation }> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>CustomersScreen</Text>
      <Button
        title="Go to Customer details"
        onPress={() => navigation.navigate(CUSTOMER_DETAILS_ROUTE)}
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

export default CustomersScreen;
