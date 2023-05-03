import { FC } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import useData from "./useDate";
import { Image, UploadImage } from "@app/components";

export const ProducerActionFiles: FC = () => {
  const { loading, onSubmit, producerAction, refetch } = useData();

  return (
    <ScrollView style={styles.container}>
      {!loading && (
        <View>
          <UploadImage onUploadComplete={onSubmit} />
        </View>
      )}

      <View>
        {producerAction?.fileUses?.map(({ file }) => (
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

export default ProducerActionFiles;
