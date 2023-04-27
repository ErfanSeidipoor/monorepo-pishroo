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
  CUSTOMER_ACTIONS_ROUTE,
  CUSTOMER_CREATE_ACTION_ROUTE,
} from "@app/constants";
import { useCustomerDetails } from "@app/hooks";
import { useNavigation } from "@react-navigation/native";

export const CustomerDeatilsScreen: FC = () => {
  const { getCustomerLoading, customer } = useCustomerDetails();
  const { navigate } = useNavigation();

  const renderDetails = () => {
    if (!getCustomerLoading && customer)
      return (
        <View style={styles.details}>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.NAME}:</Text>
            <Text style={styles.value}>
              {customer.firstName} {customer.lastName}
            </Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.EMAIL}:</Text>
            <Text style={styles.value}>{customer.email}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.JOB_TITLE}:</Text>
            <Text style={styles.value}>{customer.jobTitle}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.PHONE}:</Text>
            <Text style={styles.value}>
              {customer.phone} {customer.officePhone}
            </Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.CITY}:</Text>
            <Text style={styles.value}>
              {customer.city.name} {customer.city.province.name}
            </Text>
          </View>
        </View>
      );
  };

  const renderLoading = () => {
    if (getCustomerLoading) return <ActivityIndicator size={"small"} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderDetails()}
      {renderLoading()}
      <Text style={styles.text}>CustomerDeatilsScreen</Text>
      <Button
        title="Go to Customer Actions"
        onPress={() => navigate(CUSTOMER_ACTIONS_ROUTE)}
      />
      <Button
        title="Go to Create Action"
        onPress={() => navigate(CUSTOMER_CREATE_ACTION_ROUTE)}
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

export default CustomerDeatilsScreen;
