import { View, Text,Pressable, Image } from "react-native";
import React from "react";
import MainContainer from "../components/Container/MainContainer";
import KeyboardAvoidWrapper from "../components/Container/KeyboardAvoidWrapper";
import CustomTextInput from "../components/InputText/CustomTextInput";
import { AtSymbolIcon, LockClosedIcon } from "react-native-heroicons/solid";
import CustomButton from "../components/Buttons/CustomButton";

const Register = () => {
  const [username, setUsername] = React.useState<String | null>(null);
  const [password, setPassword] = React.useState<String | null>(null);
  const onUsernameChange = (username: String) => {
    setUsername(username);
  };
  const onPasswordChange = (password: String) => {
    setPassword(password);
  };
  return (
    <MainContainer>
      <KeyboardAvoidWrapper>
        <View className="flex flex-row items-center justify-center gap-0 pt-[25%]">
        <Image 
        style={{ top: -42, width: 150, height:150 }}
        source={require('./logo192.png')} 
        />
        </View>
        <View className="flex flex-1 justify-center items-center pt-[7%] px-[25px]">
          <Text className="text-[#EFE3C8] text-md">
            Inscrivez vous sur Medlivs
          </Text>
          <View className="h-[30px] w-full"></View>

          <CustomTextInput
            onChangeText={onUsernameChange}
            label="Telephone"
            placeholder="Entez votre numero de telephone"
          />

          <CustomTextInput
            onChangeText={onUsernameChange}
            label="Nom & speudo"
            placeholder="Entez votre nom"
          />

          <CustomTextInput
            icon={<AtSymbolIcon color={"#EFE3C850"} width={35} height={35} />}
            onChangeText={onUsernameChange}
            label="Adresse mail"
            keyboardType={"email-address"}
            placeholder="Entez votre email"
          />
          <CustomTextInput
            icon={<LockClosedIcon color={"#EFE3C850"} width={35} height={35} />}
            onChangeText={onPasswordChange}
            label="Mot de passe"
            IsSecureText={true}
            placeholder="* * * * * * * *"
          />

          <CustomTextInput
            icon={<LockClosedIcon color={"#EFE3C850"} width={35} height={35} />}
            onChangeText={onPasswordChange}
            label="confirmation mot de passe"
            IsSecureText={true}
            placeholder="* * * * * * * *"
          />
          <CustomButton
            buttonText="S'inscrire"
            buttonClassNames="w-full rounded-3xl p-3 bg-[#EFE3C8] flex justify-center items-center mt-5"
            textClassNames="text-[#4A2B29] text-[18px] font-semibold"
            onPress={() => console.log(password)}
          />

          <View className="flex w-full justify-end items-end pt-4">
            <Pressable onPress={() => {}}>
              <Text className="text-center text-gray-500 text-sm">
                Vous avez deja un compte?
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidWrapper>
    </MainContainer>
  );
};

export default Register;
