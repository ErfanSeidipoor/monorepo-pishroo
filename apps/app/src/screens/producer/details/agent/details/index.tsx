import { FC } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import TEXTS from "libs/texts/src";

import useDate from "./useDate";

export const ProducerAgentDeatilsScreen: FC = () => {
  const { getProducerAgentLoading, producerAgent } = useDate();

  const renderLoading = () => {
    if (getProducerAgentLoading) return <ActivityIndicator size={"small"} />;
  };

  const renderDetails = () => {
    if (!getProducerAgentLoading && producerAgent)
      return (
        <View style={styles.details}>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.NAME}:</Text>
            <Text style={styles.value}>
              {producerAgent.firstName + " " + producerAgent.lastName}
            </Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.EMAIL}:</Text>
            <Text style={styles.value}>{producerAgent.email}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.PHONE}:</Text>
            <Text style={styles.value}>{producerAgent.phone}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.PRODUCER}:</Text>
            <Text style={styles.value}>{producerAgent.producer.name}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.CITY}:</Text>
            <Text style={styles.value}>
              {producerAgent.producer.city.province.name}{" "}
              {producerAgent.producer.city.name}
            </Text>
          </View>
        </View>
      );
  };

  return (
    <ScrollView style={styles.container}>
      {renderLoading()}
      {renderDetails()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

export default ProducerAgentDeatilsScreen;
