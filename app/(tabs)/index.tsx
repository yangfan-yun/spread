import { SafeAreaView, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

import React from "react";
import { Icon, IconElement, Tab, TabBar, TabBarProps, useTheme } from '@ui-kitten/components';

import { Ionicons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';

const useTabBarState = (initialState = 0): Partial<TabBarProps> => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  return { selectedIndex, onSelect: setSelectedIndex };
};


export const TabBarAccessoriesShowcase = (): React.ReactElement => {
  const state = useTabBarState();
  const theme = useTheme();
  const iconColorSelected = theme["color-primary-500"];
  const iconColorUnselected = theme["color-basic-500"];
  return (
    <>
      <TabBar {...state}>
        <Tab
          title="Bets I created"
          icon= <Ionicons name="person-outline" size={24} color={
            state.selectedIndex === 0
              ? iconColorSelected
              : iconColorUnselected
          } />
        />
        <Tab
          title="Bets I joined"
          icon=<Ionicons name="people-outline" size={24} color={
            state.selectedIndex === 1
              ? iconColorSelected
              : iconColorUnselected
          } />
        />        
        <Tab
          title="Bets I'm judging"
          icon=<Octicons name="law" size={24} color={
            state.selectedIndex === 2
              ? iconColorSelected
              : iconColorUnselected
          } />
        />
      </TabBar>

    </>
  );
};

export default function BetsBets() {
  return (
  <SafeAreaView style={styles.container}>
    <TabBarAccessoriesShowcase />
  </SafeAreaView>)
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
