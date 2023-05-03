import { FC } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  View,
  ActivityIndicator,
} from "react-native";

import TEXTS from "libs/texts/src";

import {
  TRANSPORTER_ACTIONS_ROUTE,
  TRANSPORTER_AGENT_ROUTE,
  TRANSPORTER_CREATE_ACTION_ROUTE,
} from "@app/constants";
import { useTransporterDetails } from "@app/hooks";
import { useNavigation } from "@react-navigation/native";

export const TransporterDeatilsScreen: FC = () => {
  const { getTransporterLoading, transporter } = useTransporterDetails();
  const { navigate } = useNavigation();

  const renderDetails = () => {
    if (!getTransporterLoading && transporter)
      return (
        <View style={styles.details}>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.NAME}:</Text>
            <Text style={styles.value}>{transporter.name}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.EMAIL}:</Text>
            <Text style={styles.value}>{transporter.email}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.PHONE}:</Text>
            <Text style={styles.value}>{transporter.phone}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.ADDRESS}:</Text>
            <Text style={styles.value}>{transporter.address}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.DESCRIPTION}:</Text>
            <Text style={styles.value}>{transporter.description}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.CITY}:</Text>
            <Text style={styles.value}>
              {transporter.city.name} {transporter.city.province.name}
            </Text>
          </View>
        </View>
      );
  };

  const renderLoading = () => {
    if (getTransporterLoading) return <ActivityIndicator size={"small"} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderDetails()}
      {renderLoading()}
      <Button
        title={TEXTS.TRANSPORTER_ACTIONS}
        onPress={() => navigate(TRANSPORTER_ACTIONS_ROUTE)}
      />
      <Button
        title={TEXTS.APP_SCREEN_TRANSPORTER__CREATE_ACTION}
        onPress={() => navigate(TRANSPORTER_CREATE_ACTION_ROUTE)}
      />
      <Button
        title={TEXTS.APP_SCREEN_TRANSPORTER__AGENTS}
        onPress={() => navigate(TRANSPORTER_AGENT_ROUTE)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  details: {
    flexGrow: 1,
  },
  detail: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
  },
  label: {
    marginRight: 10,
  },
  value: {
    color: "#000",
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});

export default TransporterDeatilsScreen;
