/// <reference types="nativewind/types" />

declare module "*.svg" {
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

declare module "*.png" {
  import { ImageSourcePropType } from "react-native";
  const value: ImageSourcePropType;
  export default value;
}

declare module "*.jpg" {
  import { ImageSourcePropType } from "react-native";
  const value: ImageSourcePropType;
  export default value;
}

declare module "*.mp4" {
  import { Video } from "expo-av";
  const value: string;
  export default value;
}

declare module "*.json" {
  const value: Record<string, unknown>;
  export default value;
}