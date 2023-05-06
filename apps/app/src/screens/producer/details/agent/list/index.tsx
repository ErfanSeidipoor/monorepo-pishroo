import { FC } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  View,
  TextInput,
  ActivityIndicator,
  SectionList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Controller } from "react-hook-form";

import TEXTS from "libs/texts/src";

import { CardDetails } from "@app/components";
import { PRODUCER_AGENT_DETAILS_ROUTE } from "@app/constants";

import useData from "./useDate";

export const ProducerAgentsScreen: FC = () => {
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
    email,
    firstName,
    lastName,
    phone,
    producer,
    id,
  }: (typeof rows)[0]) => (
    <CardDetails
      key={id}
      properties={[
        { label: TEXTS.NAME, value: firstName + " " + lastName },
        { label: TEXTS.EMAIL, value: email },
        { label: TEXTS.PHONE, value: phone },
        { label: TEXTS.PRODUCER, value: producer.name },
        { label: TEXTS.CITY, value: producer.city.province.name },
      ]}
      onClick={() =>
        navigate(PRODUCER_AGENT_DETAILS_ROUTE, { producerAgentId: id })
      }
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

  return (
    <SafeAreaView style={styles.container}>
      {renderFilter()}
      {renderItems()}
      {renderLoading()}
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

export default ProducerAgentsScreen;
