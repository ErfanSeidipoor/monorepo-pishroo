import TEXTS from "@pishroo/texts";
import { FC } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  TextInput,
  View,
} from "react-native";
import { Controller } from "react-hook-form";
import useDate from "./useDate";

export const CallDeatilsScreen: FC = () => {
  const {
    getCallLoading,
    call,
    onSubmit,
    control,
    handleSubmit,
    updateCallLoading,
    isValid,
  } = useDate();

  const getCallType = ({
    customer,
    transporter,
    producer,
  }: Partial<typeof call>) => {
    if (customer) {
      return `${TEXTS.CUSTOMER} - ${customer?.firstName} ${customer?.lastName} - (${customer?.jobTitle})`;
    }
    if (transporter) {
      return `${TEXTS.TRANSPORTER} - ${transporter?.name} ${transporter.city.name} - (${transporter.city.province.name})`;
    }
    if (producer) {
      return `${TEXTS.TRANSPORTER} - ${producer?.name} ${producer.city.name} - (${producer.city.province.name})`;
    }
  };

  const renderLoading = () => {
    if (getCallLoading) return <ActivityIndicator size={"small"} />;
  };

  const renderDetails = () => {
    if (!getCallLoading && call)
      return (
        <View style={styles.details}>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.DESCRIPTION}:</Text>
            <Text style={styles.value}>{call.description}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.PHONE}:</Text>
            <Text style={styles.value}>{call.newPhone}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.TYPE}:</Text>
            <Text style={styles.value}>{getCallType(call)}</Text>
          </View>
        </View>
      );
  };

  const renderForm = () => {
    if (!getCallLoading && call)
      return (
        <SafeAreaView style={styles.container}>
          <Text>{TEXTS.DESCRIPTION}</Text>
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
                placeholder={TEXTS.DESCRIPTION}
              />
            )}
            name="description"
          />

          <Text>{TEXTS.PHONE}</Text>
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
                placeholder={TEXTS.DESCRIPTION}
              />
            )}
            name="newPhone"
          />
          <View style={styles.button}>
            <Button
              title={TEXTS.UPDATE}
              onPress={handleSubmit(onSubmit)}
              disabled={!isValid || updateCallLoading}
            />
          </View>
        </SafeAreaView>
      );
  };
  return (
    <SafeAreaView style={styles.container}>
      {renderLoading()}
      {renderDetails()}
      {renderForm()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  details: {
    flexGrow: 1,
    marginBottom: 20,
  },
  detail: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 5,
  },
  label: {
    marginRight: 10,
  },
  value: {
    color: "#000",
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

export default CallDeatilsScreen;
