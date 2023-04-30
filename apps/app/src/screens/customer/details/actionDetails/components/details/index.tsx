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

import TEXTS from "@pishroo/texts";
import useData from "./useDate";

export const CustomerActionDetails: FC = () => {
  const { isValid, control, errors, handleSubmit, onSubmit, loading } =
    useData();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>CustomerActionDetails</Text>
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
            placeholder={TEXTS.TEXT}
          />
        )}
        name="text"
      />
      <View style={styles.button}>
        <Button
          title={TEXTS.UPDATE}
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid || loading}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "white",
    borderColor: "black",
  },
  button: {
    marginTop: 40,
    height: 40,
  },
});

export default CustomerActionDetails;
