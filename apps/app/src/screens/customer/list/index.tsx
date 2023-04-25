import { FC } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  View,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Controller } from "react-hook-form";

import TEXTS from "libs/texts/src";

import useData from "./useDate";
import { CardDetails } from "@app/components";
import { CUSTOMER_DETAILS_ROUTE } from "@app/constants";

export const CustomersScreen: FC<{ navigation }> = ({ navigation }) => {
  const {
    isValid,
    control,
    errors,
    handleSubmitFilter,
    onSubmitFilter,
    loading,
    rows,
    onEndReached,
  } = useData();

  const renderFilter = () => {
    return (
      <View>
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
              placeholder={TEXTS.SEARCH}
            />
          )}
          name="search"
        />

        <View style={styles.button}>
          <Button
            title={TEXTS.SEARCH}
            onPress={handleSubmitFilter(onSubmitFilter)}
            disabled={!isValid || loading}
          />
        </View>
      </View>
    );
  };

  const renderItem = ({
    firstName,
    lastName,
    email,
    jobTitle,
    phone,
    officePhone,
    city,
  }: (typeof rows)[0]) => (
    <CardDetails
      properties={[
        { label: TEXTS.NAME, value: firstName + " " + lastName },
        { label: TEXTS.EMAIL, value: email },
        { label: TEXTS.JOB_TITLE, value: jobTitle },
        { label: TEXTS.PHONE, value: officePhone + " " + phone },
        { label: TEXTS.CITY, value: city.province.name + " " + city.name },
      ]}
      onClick={() => navigation.navigate(CUSTOMER_DETAILS_ROUTE)}
    />
  );

  const renderItems = () => (
    <FlatList
      data={rows}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item) => item.id}
      onEndReached={onEndReached}
      ListFooterComponent={loading && <ActivityIndicator size={"small"} />}
      onEndReachedThreshold={0.8}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderFilter()}
      {renderItems()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginTop: 10,
    height: 40,
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    marginTop: 10,
  },
  input: {
    backgroundColor: "white",
    borderColor: "black",
    marginTop: 10,
  },
  itemContainer: {
    backgroundColor: "white",
    borderColor: "black",
    marginBottom: 5,
    padding: 5,
    paddingTop: 50,
    paddingBottom: 50,
  },
});

export default CustomersScreen;
