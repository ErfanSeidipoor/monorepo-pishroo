import { MESSAGE_DETAILS_ROUTE } from "@app/constants";
import { FC } from "react";
import { StyleSheet, Text, SafeAreaView, Button } from "react-native";

export const MessageListScreen: FC<{ navigation }> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>MessageListScreen</Text>
      <Button
        title="Go to message details"
        onPress={() => navigation.navigate(MESSAGE_DETAILS_ROUTE)}
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

export default MessageListScreen;
