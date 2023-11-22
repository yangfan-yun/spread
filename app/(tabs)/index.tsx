import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

import React from 'react';
import { Tab, TabBar } from '@ui-kitten/components';

export const TabBarSimpleUsageShowcase = (): React.ReactElement => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <TabBar
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
    >
      <Tab title="Bets I'm in" />
      <Tab title="Bets I'm judging" />
    </TabBar>
  );
};

export default function BetsBets() {
  return (
      <TabBarSimpleUsageShowcase />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
