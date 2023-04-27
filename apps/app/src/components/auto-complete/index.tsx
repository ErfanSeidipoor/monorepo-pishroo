import { useState } from "react";
import {
  TextInput,
  View,
  SectionList,
  StyleSheet,
  Text,
  Modal,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import TEXTS from "libs/texts/src";

export type IAutocomplete<T extends {}> = {
  items?: T[];
  getLabel?: (t: T) => string;
  getValue?: (t: T) => string;
  onChangeInput?: (input: string) => void;
  inputValue?: string;
  placeholder?: string;
  onSelectItem?: (selectedItem: T | null) => void;
  selectedItem?: T;
  loading?: boolean;
  disabled?: boolean;
};

export const Autocomplete = <T extends {}>({
  items = [],
  getLabel = () => "",
  getValue = () => "",
  onChangeInput = () => "",
  inputValue = "",
  placeholder = "search",
  onSelectItem = () => "",
  disabled = false,
  loading,
  selectedItem,
}: IAutocomplete<T>) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const renderTextinput = () => {
    return (
      <TextInput
        style={styles.input}
        value={selectedItem ? getLabel(selectedItem) : ""}
        onTouchStart={() => !disabled && setIsOpenModal(true)}
        placeholder={placeholder}
      />
    );
  };

  const renderModal = () => {
    return (
      <Modal
        visible={disabled ? false : isOpenModal}
        animationType="fade"
        onRequestClose={() => setIsOpenModal(false)}
      >
        <View style={{ backgroundColor: "#eee", padding: 10, height: "100%" }}>
          <View style={styles.actions}>
            <View style={styles.back}>
              <Button
                onPress={() => setIsOpenModal(false)}
                title={TEXTS.BACK}
              />
            </View>
            <View style={styles.clear}>
              <Button
                onPress={() => {
                  onSelectItem(null);
                  setIsOpenModal(false);
                }}
                color="#921"
                title={TEXTS.CLEAR}
              />
            </View>
          </View>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={(value) => onChangeInput(value)}
            placeholder={placeholder}
          />
          {loading && <ActivityIndicator size={"small"} />}
          <SectionList
            sections={[{ title: "", data: items }]}
            keyExtractor={(item, index) => getValue(item) + index}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  setIsOpenModal(false);
                  onSelectItem(item);
                }}
              >
                <Text style={styles.title}>{getLabel(item)}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      {renderTextinput()}
      {renderModal()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    zIndex: 1,
  },
  modal: {
    backgroundColor: "red",
  },
  actions: {
    width: "100%",
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  clear: {
    opacity: 0.8,
  },
  back: {
    opacity: 0.8,
  },
  title: {
    fontSize: 12,
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  input: {
    backgroundColor: "white",
    borderColor: "black",
    marginTop: 10,
  },
  item: {
    padding: 5,
    margin: 2,
  },
  inputContainerStyle: {
    borderColor: "transparent",
    paddingTop: 10,
  },
});

export default Autocomplete;
