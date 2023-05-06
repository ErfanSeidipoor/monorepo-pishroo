import { FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import TEXTS from "libs/texts/src";

export const CardDetails: FC<{
  properties: { label: string; value: string }[];
  onClick: () => void;
}> = ({ properties = [], onClick }) => {
  const renderItems = () =>
    properties.map(({ label, value }) => (
      <View key={label + value} style={styles.property}>
        <Text style={styles.label}>{label}:</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    ));

  const renderButton = () => (
    <View style={styles.button}>
      <Button title={TEXTS.MORE} onPress={onClick} color={""} />
    </View>
  );

  return (
    <View style={styles.container}>
      {renderItems()}
      {renderButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderColor: "black",
    marginBottom: 5,
    padding: 5,
    display: "flex",
  },
  property: {
    display: "flex",
  },
  label: {
    marginRight: 10,
  },
  value: {
    color: "#000",
  },
  button: {
    backgroundColor: "white",
    width: 150,
    alignSelf: "flex-end",
    opacity: 0.8,
  },
});

export default CardDetails;
