import { FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image as Img,
  Pressable,
  Modal,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import Pdf from "react-native-pdf";
import TEXTS from "@pishroo/texts";
import useData from "./useDate";

export const Image: FC<{
  filename: string;
  fileId: string;
  onRemoveComplete?: () => void;
}> = ({ filename, fileId, onRemoveComplete = () => "" }) => {
  const { loading, onRemove, openDialog, setOpenDialog } = useData(
    fileId,
    onRemoveComplete
  );

  const renderDialog = () => {
    return (
      <Modal
        visible={openDialog}
        animationType="fade"
        onRequestClose={() => setOpenDialog(false)}
      >
        <View style={styles.modalContainer}>
          <Text>{filename}</Text>
          {filename.includes(".pdf") ? (
            <Pdf
              trustAllCerts={false}
              source={{
                uri:
                  process.env["NX_BACK_NATIVE_URL"] + "/api/file/" + filename,
                cache: true,
              }}
              onLoadComplete={(numberOfPages, filePath) => {
                console.log(`Number of pages: ${numberOfPages}`);
              }}
              onPageChanged={(page, numberOfPages) => {
                console.log(`Current page: ${page}`);
              }}
              onError={(error) => {
                console.log(error);
              }}
              onPressLink={(uri) => {
                console.log(`Link pressed: ${uri}`);
              }}
              style={styles.pdf}
            />
          ) : (
            <Img
              style={styles.imageDialog}
              source={{
                uri:
                  process.env["NX_BACK_NATIVE_URL"] + "/api/file/" + filename,
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
      {loading ? <ActivityIndicator size={"small"} /> : <Text>{filename}</Text>}
      <Img
        style={styles.image}
        source={{
          uri: process.env["NX_BACK_NATIVE_URL"] + "/api/file/" + filename,
        }}
      />
      <View style={styles.actions}>
        <Pressable disabled={loading} style={styles.action} onPress={onRemove}>
          <Text>{TEXTS.DELETE}</Text>
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

export default Image;
