import {
  useTheme,
} from "@ui-kitten/components";

const theme = useTheme();

const tintColorLight = "#a6cc70";
const tintColorDark = "#a6cc70";

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};
