import { Platform } from "react-native";

const isAos = Platform.OS === "android";
const isIos = Platform.OS === "ios";
const isWeb = Platform.OS === "web";

export const platform = { isAos, isIos, isWeb };
