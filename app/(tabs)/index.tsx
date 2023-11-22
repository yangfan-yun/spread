import { SafeAreaView, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

import React from "react";
import { Layout, Tab, TabBar } from "@ui-kitten/components";

export const TabBarSimpleUsageShowcase = (): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Layout style={{ flex: 1 }}>
        <TabBar
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
        >
          <Tab title="Bets I'm in" />
          <Tab title="Bets I'm judging" />
        </TabBar>
      </Layout>
    </SafeAreaView>
  );
};

export default function BetsBets() {
  return <TabBarSimpleUsageShowcase />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
