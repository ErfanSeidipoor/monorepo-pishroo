import { FC } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image as Img,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import TEXTS from "@pishroo/texts";
import useData from "./useDate";

export const UploadImage: FC<{
  onUploadComplete?: (fileId: string) => void;
}> = ({ onUploadComplete = () => "" }) => {
  const { loading, onUpload, openDialog, setOpenDialog, objectURL, onAddFile } =
    useData(onUploadComplete);

  const renderDialog = () => {
    return (
      <Modal
        visible={openDialog}
        onRequestClose={() => setOpenDialog(false)}
        animationType="fade"
      >
        <View style={styles.modalContainer}>
          {objectURL && (
            <Img
              style={styles.imageDialog}
              source={{
                uri: objectURL,
              }}
            />
          )}
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      {renderDialog()}
      {loading ? (
        <ActivityIndicator size={"small"} />
      ) : (
        <Text>{objectURL}</Text>
      )}
      {objectURL && (
        <Img
          style={styles.image}
          source={{
            uri: objectURL,
          }}
        />
      )}

      <View style={styles.actions}>
        <Pressable disabled={loading} style={styles.action} onPress={onAddFile}>
          <Text>{TEXTS.ADD_FILE}</Text>
        </Pressable>
        <Pressable disabled={loading} style={styles.action} onPress={onUpload}>
          <Text>{TEXTS.UPLOAD}</Text>
        </Pressable>
        <Pressable
          disabled={loading}
          style={styles.action}
          onPress={() => setOpenDialog(true)}
        >
          <Text>{TEXTS.EXPAND}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "black",
    margin: 5,
    display: "flex",
    width: 250,
  },
  image: {
    height: 200,
    borderRadius: 10,
    backgroundColor: "#999",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imageDialog: {
    height: "100%",
    width: "100%",
  },
  pdf: {
    width: Dimensions.get("window").width,
    height: 400,
    flex: 1,
  },
  actions: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  action: {
    backgroundColor: "white",
    marginRight: 10,
  },
});

export default UploadImage;
