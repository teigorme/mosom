import { View, Text, StatusBar, TextInput, Alert } from "react-native";
import React from "react";
import Voice, { SpeechResultsEvent } from "@react-native-voice/voice";
import { Button } from "@/components/button";

const Index = () => {
  const [isListening, setIsListening] = React.useState<boolean>(false);
  const [search, setSearch] = React.useState<string>("");

  function onSpeechResults({ value }: SpeechResultsEvent) {
    console.warn(value);
  }

  async function Recording() {
    try {
      if (isListening) {
        await Voice.stop();
      }
      setSearch("");
      await Voice.start("pt-AO");
      setIsListening(true);
    } catch (error:any) {
      Alert.alert("Erro no app",error)
    }
  }

  React.useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;
  }, []);
  return (
    <View className="h-full bg-gray-200">
      <TextInput onChangeText={setSearch} value={search} />
      <View className="flex-1 items-center justify-center px-4">
        <Text className="text-gray-900 text-xl font-bold">
          Olá, Bem-vindo ao MoSom
        </Text>
        <Button
          label="Ouvir música 🎵"
          className="w-32 h-32 rounded-full flex items-center justify-center mt-4"
        />
      </View>
      <View className="border-b border-white" />
      <Text className="text-gray-900 text-center py-4">teigorme</Text>
      <StatusBar barStyle={"dark-content"} />
    </View>
  );
};

export default Index;
