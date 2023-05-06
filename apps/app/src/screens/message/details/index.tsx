import { FC } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  View,
  Button,
  Text,
  Alert,
} from "react-native";
import SendSMS from "react-native-sms";
import useDate from "./useDate";
import TEXTS from "@pishroo/texts";

export const MessageDeatilsScreen: FC = () => {
  // const DirectSms = NativeModules.DirectSms;
  const { getMessageLoading, message, onUpdateMessageSubmit } = useDate();
  const renderLoading = () => {
    if (getMessageLoading) return <ActivityIndicator size={"small"} />;
  };

  const onClick = async () => {
    SendSMS.send(
      {
        body: "The default body of the SMS!",
        recipients: ["0123456789", "9876543210"],
        successTypes: ["sent", "sent"],
        allowAndroidSendWithoutReadPermission: true,
      },
      (completed, cancelled, error) => {
        onUpdateMessageSubmit();
        console.log({ completed, cancelled, error });

        if (completed) {
          Alert.alert(TEXTS.APP_SCREEN_MESSAGE__SENT_SUCCESSFULLY);
        }
        if (cancelled || error) {
          Alert.alert(TEXTS.APP_SCREEN_MESSAGE__CANCELLED);
        }
      }
    );
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

  const renderSubmitButton = () => {
    if (!getMessageLoading && message)
      return (
        <Button
          title="Send SMS"
          onPress={onClick}
          disabled={message.isSubmited}
        />
      );
  };
  return (
    <SafeAreaView style={styles.container}>
      {renderDetails()}
      {renderProductProperties()}
      {renderSubmitButton()}
      {renderLoading()}
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
