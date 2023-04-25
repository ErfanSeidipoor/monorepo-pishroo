import { FC } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  TextInput,
  View,
} from "react-native";
import { Controller } from "react-hook-form";

import TEXTS from "libs/texts/src";

import useData from "./useData";

export const LogoutScreen: FC<{ navigation }> = ({ navigation }) => {
  const { onSubmit, loading } = useData();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>{TEXTS.APP_SCREEN_LOGOUT__CONFIRMATION}</Text>
      <View style={styles.button}>
        <Button
          title={TEXTS.APP_SCREEN_LOGOUT__LOGOUT}
          onPress={onSubmit}
          disabled={loading}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    marginTop: 30,
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

export default LogoutScreen;
