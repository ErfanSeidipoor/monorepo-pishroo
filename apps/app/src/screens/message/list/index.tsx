import { FC } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  SectionList,
  Switch,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Controller } from "react-hook-form";

import TEXTS from "libs/texts/src";

import { CardDetails } from "@app/components";
import { MESSAGE_DETAILS_ROUTE } from "@app/constants";

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

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.switch}>
              <Text>{TEXTS.IS_SUBMITED}</Text>
              <Switch onValueChange={onChange} value={value} />
            </View>
          )}
          name="isSubmitted"
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
    id,
    count,
    user,
    isSubmited,
    text,
  }: (typeof rows)[0]) => (
    <CardDetails
      properties={[
        { label: TEXTS.TEXT, value: text.slice(0, 100) },
        { label: TEXTS.IS_SUBMITED, value: isSubmited ? TEXTS.YES : TEXTS.NO },
        { label: TEXTS.COUNT, value: count.toString() },
      ]}
      onClick={() => navigate(MESSAGE_DETAILS_ROUTE, { messageId: id })}
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
