import React from "react";
import { KeyboardAvoidingView, Keyboard, Pressable, Platform, ScrollView} from "react-native";
import { IProps } from "../../auth-app";

const KeyboardAvoidWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <KeyboardAvoidingView
      className="flex-1 flex bg-transparent"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={60}
    >
      <ScrollView className="flex flex-1" showsVerticalScrollIndicator={false}>
        <Pressable onPress={Keyboard.dismiss}>{children}</Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default KeyboardAvoidWrapper;
