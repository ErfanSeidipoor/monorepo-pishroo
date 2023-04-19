import { FC } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

export const MessageDeatilsScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>MessageDeatilsScreen</Text>
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

export default MessageDeatilsScreen;