import { PRODUCT_DETAILS_ROUTE } from "@app/constants";
import { FC } from "react";
import { StyleSheet, Text, SafeAreaView, Button } from "react-native";

import {
  PRODUCT_ROUTE,
  CUSTOMER_ROUTE,
  TRANSPORTER_ROUTE,
  PRODUCER_ROUTE,
  MESSAGE_ROUTE,
  PHONENUMBER_ROUTE,
} from "@app/constants";

export const ProductListScreen: FC<{ navigation }> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>ProductListScreen</Text>
      <Button
        title="Go to Product details"
        onPress={() => navigation.navigate(PRODUCT_DETAILS_ROUTE)}
      />

      <Button
        title="Go to Product"
        onPress={() => navigation.navigate(PRODUCT_ROUTE)}
      />

      <Button
        title="Go to Customer"
        onPress={() => navigation.navigate(CUSTOMER_ROUTE)}
      />

      <Button
        title="Go to transporter"
        onPress={() => navigation.navigate(TRANSPORTER_ROUTE)}
      />

      <Button
        title="Go to producer"
        onPress={() => navigation.navigate(PRODUCER_ROUTE)}
      />

      <Button
        title="Go to message"
        onPress={() => navigation.navigate(MESSAGE_ROUTE)}
      />
      <Button
        title="Go to phonenumber"
        onPress={() => navigation.navigate(PHONENUMBER_ROUTE)}
      />
    </SafeAreaView>
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
});

export default ProductListScreen;
