import { FC } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import useData from "./useDate";
import { Image, UploadImage } from "@app/components";

export const CustomerActionFiles: FC = () => {
  const { loading, onSubmit, customerAction, refetch } = useData();

  return (
    <ScrollView style={styles.container}>
      {!loading && (
        <View>
          <UploadImage onUploadComplete={onSubmit} />
        </View>
      )}

      <View>
        {customerAction?.fileUses?.map(({ file }) => (
          <View key={file.id}>
            <Image
              filename={file.filename}
              fileId={file.id}
              onRemoveComplete={refetch}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});

export default CustomerActionFiles;
