import { FC } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

export const CustomerActionFiles: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>CustomerActionFiles</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});

export default CustomerActionFiles;
