import TEXTS from "@pishroo/texts";
import { FC } from "react";
import { SafeAreaView, StyleSheet, Button } from "react-native";
import useDate from "./useDate";

export const PhonenumberScreen: FC<{ navigation }> = ({ navigation }) => {
  const { onSyncCallLogs } = useDate();

  return (
    <SafeAreaView style={styles.container}>
      <Button title={TEXTS.SYNC} onPress={onSyncCallLogs} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});

export default PhonenumberScreen;
