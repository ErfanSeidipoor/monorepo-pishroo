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
  const { isValid, control, errors, handleSubmit, onSubmit, isLoading } =
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
          style={styles.button}
          title={TEXTS.PAGE_LOGIN__LOGIN}
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid || isLoading}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    // color: "white",
    // margin: 20,
    // marginLeft: 0,
    marginTop: 30,
  },
  button: {
    marginTop: 40,
    // color: "white",
    height: 40,
    // backgroundColor: "#ec5990",
    // borderRadius: 4,
  },
  container: {
    flex: 1,
    // justifyContent: "center",
    padding: 8,
    // backgroundColor: "#0e101c",
  },
  input: {
    backgroundColor: "white",
    borderColor: "black",
    // height: 40,
    // padding: 10,
    // borderRadius: 4,
  },
});

export default LoginScreen;
