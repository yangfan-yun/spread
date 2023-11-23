// import { SafeAreaView, StyleSheet, View } from "react-native";

// import EditScreenInfo from "../../components/EditScreenInfo";
// // import { Text } from "../../components/Themed";

// import React from "react";
// import { Icon, IconElement, Tab, TabBar, TabBarProps, useTheme, Layout, Text } from '@ui-kitten/components';

// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import { Ionicons } from '@expo/vector-icons'; 
// import { Octicons } from '@expo/vector-icons';

// const { Navigator, Screen } = createMaterialTopTabNavigator();

// const UsersScreen = () => (
//   <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text category='h1'>USERS</Text>
//   </Layout>
// );

// const OrdersScreen = () => (
//   <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text category='h1'>ORDERS</Text>
//   </Layout>
// );

// const TopTabBar = ({ navigation, state } : {navigation:any, state:any}): React.ReactElement => {
//   const theme = useTheme();
//   const iconColorSelected = theme["color-primary-500"];
//   const iconColorUnselected = theme["color-basic-500"];
//   return (
//     <>
//       <TabBar {...state}>
//       selectedIndex={state.index}
//       onSelect={(index: any) => navigation.navigate(state.routeNames[index])}
//         <Tab
//           title="Bets I created"
//           icon= <Ionicons name="person-outline" size={24} color={
//             state.selectedIndex === 0
//               ? iconColorSelected
//               : iconColorUnselected
//           }
//           />
//         />
//         <Tab
//           title="Bets I joined"
//           icon=<Ionicons name="people-outline" size={24} color={
//             state.selectedIndex === 1
//               ? iconColorSelected
//               : iconColorUnselected
//           } />
//         />        
//         <Tab
//           title="Bets I'm judging"
//           icon=<Octicons name="law" size={24} color={
//             state.selectedIndex === 2
//               ? iconColorSelected
//               : iconColorUnselected
//           } />
//         />
//       </TabBar>
//     </>
//   );
// };

// const TabNavigator = () => (
//   <Navigator tabBar={props => <TopTabBar {...props} />}>
//     <Screen name='Users' component={UsersScreen}/>
//     <Screen name='Orders' component={OrdersScreen}/>
//   </Navigator>
// );

// export default function BetsBets() {
//   return (
//       <TabNavigator/>
//   )
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: "80%",
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   text: {
//     margin: 2,
//   },
// });

import React from 'react';
import { SafeAreaView, StyleSheet, View, ViewProps } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EditScreenInfo from "../../components/EditScreenInfo";
import { Card, Button, Layout, Text, useTheme, Divider } from '@ui-kitten/components';

import { Ionicons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';

const MyTab = createMaterialTopTabNavigator();

const BetsCreated = () => (
  <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' , paddingTop: 10 , paddingLeft: 10, paddingRight: 10 }}>
    <Text category='h2'>Awaiting Joiner</Text>
    <Text category='h2'>Awaiting Judge</Text>

    <Text category='h2'>Ongoing</Text>

    <Text category='h2'>Completed</Text>
  </Layout>
);

const BetsJoined = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Bets I joined</Text>
  </Layout>
);

const BetsJudging = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Bets I'm judging</Text>
  </Layout>
);

function MyTabs() {
  const theme = useTheme()
  const initialRouteName = "Feed";
  const screenOptions = {
    tabBarActiveTintColor: theme["color-primary-500"],
    tabBarInactiveTintColor: theme["color-basic-700"],
    tabBarLabelStyle: { fontSize: 12 },
    tabBarIndicatorStyle: { backgroundColor: theme["color-primary-500"] },
    onAnimatedValueUpdate: null,
  };

  return (
    <MyTab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={screenOptions}
    >
      <MyTab.Screen
        name="BetsCreated"
        component={BetsCreated}
        options={{ tabBarLabel: 'Created' , tabBarIcon:({ focused }) =>
        (<Ionicons name="person-outline" size={24} color={focused ? theme["color-primary-500"]: theme["color-basic-700"]}/>)
      }}
      />
      <MyTab.Screen
        name="BetsJoined"
        component={BetsJoined}
        options={{ tabBarLabel: 'Joined' , tabBarIcon:({ focused }) =>
        (<Ionicons name="people-outline" size={24} color={focused ? theme["color-primary-500"]: theme["color-basic-700"]}/>)
      }}
      />
      <MyTab.Screen
        name="BetsJudging"
        component={BetsJudging}
        options={{ tabBarLabel: 'Judging' , tabBarIcon:({ focused }) =>
        (<Octicons name="law" size={24} color={focused ? theme["color-primary-500"]: theme["color-basic-700"]}/>)
      }}
      />
    </MyTab.Navigator>
  );
}

export default function BetsBets() {
  return (
  <SafeAreaView style={styles.container}>
    <MyTabs />
  </SafeAreaView>);
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
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#B2B2B2", // Change the color as needed
    paddingVertical: 8, // Adjust the padding as needed
    fontSize: 16,
    borderTopWidth: 0, // Hide the top border
    borderLeftWidth: 0, // Hide the left border
    borderRightWidth: 0, // Hide the right border
  },
  arrowBtnContainer: {
    position: "absolute",
    justifyContent: "center",
    alignContent: "center",
    bottom: 24,
    right: 24,
    borderRadius: 37.5,
    width: 75,
    height: 75,
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});
