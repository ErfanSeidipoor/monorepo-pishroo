import { FC } from "react";
import {
  Text,
  Button,
  TextInput,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Controller } from "react-hook-form";
import TEXTS from "libs/texts/src";

import useData from "./useDate";

export const CreateCallScreen: FC = () => {
  const { isValid, control, errors, handleSubmit, onSubmit, loading } =
    useData();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>{TEXTS.DESCRIPTION}</Text>
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
        name="description"
      />

      <Text style={styles.label}>{TEXTS.PHONE}</Text>
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
        name="newPhone"
      />
      <View style={styles.button}>
        <Button
          title={TEXTS.CREATE}
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
  },
  input: {
    backgroundColor: "white",
    borderColor: "black",
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});

export default CreateCallScreen;
