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

export const LoginScreen: FC<{ navigation }> = ({ navigation }) => {
  const { isValid, control, errors, handleSubmit, onSubmit, loading } =
    useData();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>{TEXTS.USERNAME}</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
      />
      <Text style={styles.label}>{TEXTS.PASSWORD}</Text>
      {errors.username && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      <View style={styles.button}>
        <Button
          title={TEXTS.APP_SCREEN_LOGIN__LOGIN}
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid || loading}
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

export default LoginScreen;
