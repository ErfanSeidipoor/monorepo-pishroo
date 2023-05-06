import { FC } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  PermissionsAndroid,
} from "react-native";

import CallLogs from "react-native-call-log";

import TEXTS from "libs/texts/src";
import { useUser } from "@app/hooks";

export const ProfileScreen: FC<{ navigation }> = ({ navigation }) => {
  const { currentUser } = useUser();

  const onClick = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
      {
        title: "Call Log Example",
        message: "Access your call logs",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      CallLogs.load(-1, {}).then((c) => console.log(c));
    } else {
      console.log("Call Log permission denied");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>{TEXTS.FIRSTNAME}</Text>
      <Text style={styles.value}>{currentUser && currentUser.firstName}</Text>
      <Text style={styles.label}>{TEXTS.LASTNAME}</Text>
      <Text style={styles.value}>{currentUser && currentUser.lastName}</Text>
      <Text style={styles.label}>{TEXTS.USERNAME}</Text>
      <Text style={styles.value}>{currentUser && currentUser.username}</Text>
      <Button title="logs" onPress={onClick} />
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
