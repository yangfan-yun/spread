import { FontAwesome } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import {
  Layout,
  ViewPager,
  Text,
  ProgressBar,
  Button,
  useTheme,
} from "@ui-kitten/components";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button as RButton,
  View,
  Pressable,
} from "react-native";
import Spacing from "../../constants/Spacing";

const totalSteps = 3;

export default function CreateBet() {
  const [step, setStep] = useState(0);
  const [value, setValue] = useState("");
  const theme = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <Layout>
        <ProgressBar progress={step / totalSteps} size="medium" />
        <ViewPager selectedIndex={step} onSelect={(index) => setStep(index)}>
          <Layout style={styles.step} level="2">
            <Text category="h2" style={{ marginBottom: 12 }}>
              Your bet's name 🤝
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Ex. Michaela and Ben will date in 4 years"
            />
            <Pressable
              style={[
                styles.arrowBtnContainer,
                { backgroundColor: theme["color-primary-default"] },
              ]}
              onPress={() => setStep((prevStep) => prevStep + 1)}
            >
              <Feather
                size={48}
                color="#fff"
                style={{
                  left: 12,
                  height: 48,
                  width: 48,
                }}
                name="arrow-right"
              />
            </Pressable>
          </Layout>
          <Layout style={styles.step} level="2">
            <Text category="h2">How does one win/lose? 🥇</Text>
          </Layout>
          <Layout style={styles.step} level="2">
            <Text category="h2">How much are we betting? 💸</Text>
          </Layout>
          <Layout style={styles.step} level="2">
            <Text category="h2" style={{ textAlign: "center" }}>
              🎉
            </Text>
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
    ...Spacing.page,
    height: "100%",
    justifyContent: "center",
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
});
