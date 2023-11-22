import { Layout, ViewPager, Text, ProgressBar } from "@ui-kitten/components";
import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

const totalSteps = 2;

export default function CreateBet() {
  const [step, setStep] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Layout>
        <ProgressBar progress={step / totalSteps} size="medium" />
        <ViewPager selectedIndex={step} onSelect={(index) => setStep(index)}>
          <Layout style={styles.step} level="2">
            <Text category="h5">Hello</Text>
          </Layout>
          <Layout style={styles.step} level="2">
            <Text category="h5">World</Text>
          </Layout>
        </ViewPager>
      </Layout>
    </SafeAreaView>
  );
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
  step: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
