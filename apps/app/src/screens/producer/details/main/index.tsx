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
  PRODUCER_ACTIONS_ROUTE,
  PRODUCER_AGENT_ROUTE,
  PRODUCER_CREATE_ACTION_ROUTE,
} from "@app/constants";
import { useProducerDetails } from "@app/hooks";
import { useNavigation } from "@react-navigation/native";

export const ProducerDeatilsScreen: FC = () => {
  const { getProducerLoading, producer } = useProducerDetails();
  const { navigate } = useNavigation();

  const renderDetails = () => {
    if (!getProducerLoading && producer)
      return (
        <View style={styles.details}>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.NAME}:</Text>
            <Text style={styles.value}>{producer.name}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.EMAIL}:</Text>
            <Text style={styles.value}>{producer.email}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.PHONE}:</Text>
            <Text style={styles.value}>{producer.phone}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.ADDRESS}:</Text>
            <Text style={styles.value}>{producer.address}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.DESCRIPTION}:</Text>
            <Text style={styles.value}>{producer.description}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.CITY}:</Text>
            <Text style={styles.value}>
              {producer.city.name} {producer.city.province.name}
            </Text>
          </View>
        </View>
      );
  };

  const renderLoading = () => {
    if (getProducerLoading) return <ActivityIndicator size={"small"} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderDetails()}
      {renderLoading()}
      <Button
        title={TEXTS.PRODUCER_ACTIONS}
        onPress={() => navigate(PRODUCER_ACTIONS_ROUTE)}
      />
      <Button
        title={TEXTS.APP_SCREEN_PRODUCER__CREATE_ACTION}
        onPress={() => navigate(PRODUCER_CREATE_ACTION_ROUTE)}
      />
      <Button
        title={TEXTS.APP_SCREEN_PRODUCER__AGENTS}
        onPress={() => navigate(PRODUCER_AGENT_ROUTE)}
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

export default ProducerDeatilsScreen;
