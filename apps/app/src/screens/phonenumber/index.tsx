import { FC } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export const PhonenumberScreen: FC<{ navigation }> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Phonenumber page</Text>
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

export default PhonenumberScreen;
