import { FC } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  View,
  Button,
  Text,
  PermissionsAndroid,
  NativeModules,
} from "react-native";

import useDate from "./useDate";
import TEXTS from "@pishroo/texts";

export const MessageDeatilsScreen: FC = () => {
  const DirectSms = NativeModules.DirectSms;
  const { getMessageLoading, message } = useDate();
  const renderLoading = () => {
    if (getMessageLoading) return <ActivityIndicator size={"small"} />;
  };

  const onClick = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS["SEND_SMS"],
      { title: "string", message: "string", buttonPositive: "string" }
    );
    console.log({ granted });

    if (granted === PermissionsAndroid.RESULTS["GRANTED"]) {
      DirectSms.sendDirectSms("9189557540", "Hi, there");
    }
  };

  const renderDetails = () => {
    if (!getMessageLoading && message)
      return (
        <View style={styles.details}>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.TEXT}:</Text>
            <Text style={styles.value}>{message.text}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.USER}:</Text>
            <Text style={styles.value}>
              {message.user.firstName} {message.user.lastName}
            </Text>
          </View>
        </View>
      );
  };

  const renderProductProperties = () => {
    if (!getMessageLoading && message)
      return (
        <View style={styles.details}>
          {message.customerMessages.map((customerMessage) => (
            <View key={customerMessage.id} style={styles.detail}>
              <Text style={styles.label}> {TEXTS.CUSTOMER} </Text>
              <Text style={styles.value}>
                {`${customerMessage.customer.firstName} ${customerMessage.customer.lastName} ${customerMessage.customer.phone}`}
              </Text>
            </View>
          ))}
        </View>
      );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderDetails()}
      {renderProductProperties()}
      {renderLoading()}
      <Button title="Send SMS" onPress={onClick} />
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
});

export default MessageDeatilsScreen;
