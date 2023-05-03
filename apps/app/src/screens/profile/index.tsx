import { FC } from "react";
import { SafeAreaView, StyleSheet, Text, Button } from "react-native";
import DocumentPicker from "react-native-document-picker";

import TEXTS from "libs/texts/src";
import { useUser } from "@app/hooks";

export const ProfileScreen: FC<{ navigation }> = ({ navigation }) => {
  const { currentUser } = useUser();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>{TEXTS.FIRSTNAME}</Text>
      <Text style={styles.value}>{currentUser && currentUser.firstName}</Text>
      <Text style={styles.label}>{TEXTS.LASTNAME}</Text>
      <Text style={styles.value}>{currentUser && currentUser.lastName}</Text>
      <Text style={styles.label}>{TEXTS.USERNAME}</Text>
      <Text style={styles.value}>{currentUser && currentUser.username}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    marginTop: 30,
  },
  value: {
    marginTop: 5,
  },
  button: {
    marginTop: 40,
    height: 40,
  },
  container: {
    flex: 1,
    padding: 8,
  },
  input: {
    backgroundColor: "white",
    borderColor: "black",
  },
});

export default ProfileScreen;
