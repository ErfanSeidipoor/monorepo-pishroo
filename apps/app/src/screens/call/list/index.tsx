import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { Controller } from "react-hook-form";
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  SectionList,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

import TEXTS from "libs/texts/src";

import { CardDetails } from "@app/components";
import { CALL_DETAILS_ROUTE, CALL_CREATE_ROUTE } from "@app/constants";

import useData from "./useDate";

export const MessagesScreen: FC = () => {
  const {
    isValid,
    control,
    handleSubmitFilter,
    onSubmitFilter,
    loading,
    rows,
    onEndReached,
  } = useData();

  const { navigate } = useNavigation();

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
              placeholder={TEXTS.NAME}
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

  const getCallType = ({
    customer,
    transporter,
    producer,
  }: Partial<(typeof rows)[0]>) => {
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

  const renderItem = ({
    id,
    description,
    newPhone,
    customer,
    transporter,
    producer,
    type,
  }: (typeof rows)[0]) => (
    <CardDetails
      properties={[
        { label: TEXTS.PHONE, value: newPhone },
        { label: TEXTS.DESCRIPTION, value: description },
        {
          label: TEXTS.TYPE,
          value: getCallType({ customer, transporter, producer }),
        },
      ]}
      onClick={() => navigate(CALL_DETAILS_ROUTE, { callId: id })}
    />
  );

  const renderItems = () => (
    <SectionList
      sections={[{ titile: "", data: rows }]}
      keyExtractor={(item, index) => item.id + index}
      renderItem={({ item }) => renderItem(item)}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.8}
    />
  );

  const renderLoading = () => {
    if (loading) return <ActivityIndicator size={"small"} />;
  };

  const renderCreateButton = () => {
    return (
      <Button
        title={TEXTS.APP_SCREEN_CALL__CREATE_CALL}
        onPress={() => navigate(CALL_CREATE_ROUTE)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderFilter()}
      {renderItems()}
      {renderLoading()}
      {renderCreateButton()}
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
  switch: {
    height: 60,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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

export default MessagesScreen;
