import { FC } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  ActivityIndicator,
  Button,
} from "react-native";

import Clipboard from "@react-native-community/clipboard";

import TEXTS from "libs/texts/src";

import useDate from "./useDate";

export const ProductDeatilsScreen: FC = () => {
  const { getProductLoading, product } = useDate();

  const renderDetails = () => {
    if (!getProductLoading && product)
      return (
        <View style={styles.details}>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.NAME}:</Text>
            <Text style={styles.value}>{product.name}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.SLUG}:</Text>
            <Text style={styles.value}>{product.slug}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>{TEXTS.TEXT}:</Text>
            <Text style={styles.value}>{product.text}</Text>
          </View>
        </View>
      );
  };

  const renderColors = () => {
    if (!getProductLoading && product)
      return (
        <View style={styles.colors}>
          <Text style={styles.label}>{TEXTS.COLORS}:</Text>
          {product.productColors.map(({ color }) => (
            <View
              key={color.name}
              style={{ ...styles.color, backgroundColor: "#" + color.value }}
            />
          ))}
        </View>
      );
  };

  const renderProductCategories = () => {
    if (!getProductLoading && product)
      return (
        <View style={styles.details}>
          <Text style={styles.label}>{TEXTS.CATEGORY}:</Text>
          <Text style={styles.value}>
            {product.productCategories
              .map(({ category }) => category.name)
              .join("  ")}
          </Text>
        </View>
      );
  };

  const renderProductReviews = () => {
    if (!getProductLoading && product)
      return (
        <View style={styles.details}>
          {product.productReviews.map((productReview) => (
            <View key={productReview.reviewer} style={styles.detail}>
              <Text style={styles.label}>{productReview.reviewer}:</Text>
              <Text style={styles.value}>{productReview.text}</Text>
            </View>
          ))}
        </View>
      );
  };

  const renderProductProperties = () => {
    if (!getProductLoading && product)
      return (
        <View style={styles.details}>
          {product.productProperties.map((productProperty) => (
            <View key={productProperty.property.name} style={styles.detail}>
              <Text style={styles.label}>{productProperty.property.name}:</Text>
              <Text style={styles.value}>
                {productProperty.value} {productProperty.property.unit}
              </Text>
            </View>
          ))}
        </View>
      );
  };

  const renderLoading = () => {
    if (getProductLoading) return <ActivityIndicator size={"small"} />;
  };

  return (
    <ScrollView style={styles.container}>
      {renderDetails()}
      {renderProductCategories()}
      {renderColors()}
      {renderProductReviews()}
      {renderProductProperties()}
      {renderLoading()}
      <Button
        title={TEXTS.COPY}
        onPress={() =>
          Clipboard.setString(
            process.env["NX_WEBSITE_URL"] + "/product/" + product.slug
          )
        }
      />
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
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
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  colors: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  color: {
    width: 30,
    height: 30,
    margin: 5,
    marginBottom: 20,
  },
});

export default ProductDeatilsScreen;
