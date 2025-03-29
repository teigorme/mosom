import { View, Text, StatusBar, TextInput, Alert } from "react-native";
import React from "react";
import Voice, { SpeechResultsEvent } from "@react-native-voice/voice";
import { Button } from "@/components/button";

const Index = () => {
  const [isListening, setIsListening] = React.useState(false);
  const [search, setSearch] = React.useState("");

  function onSpeechResults({ value }: SpeechResultsEvent) {
    if (value?.length) {
      setSearch(value[0]); 
    }
  }

  async function Recording() {
    try {
      if (isListening) {
        await Voice.stop();
        setIsListening(false);
        return;
      }

      setSearch("");
      await Voice.start("pt-AO");
      setIsListening(true);
    } catch (error) {
      Alert.alert("Erro no app", "Funcionalidade indisponível");
      setIsListening(false);
    }
  }

  React.useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return (
    <View className="h-full bg-gray-200">
      <View className="px-4 pt-5">
        <TextInput
          onChangeText={setSearch}
          value={search}
          placeholder="Fale algo..."
          className="border border-gray-400 bg-gray-300 rounded-lg px-2 py-2"
        />
      </View>
      <View className="flex-1 items-center justify-center px-4">
        <Text className="text-gray-900 text-xl font-bold">
          Olá, Bem-vindo ao MoSom
        </Text>
        <Button
          label={isListening ? "Parar Gravação" : "Ouvir a Música"}
          onPress={Recording}
          className={`w-32 h-32 rounded-full flex items-center justify-center mt-4 ${
            isListening ? "bg-red-500" : "bg-blue-500"
          }`}
        />
      </View>
      <View className="border-b border-white" />
      <Text className="text-gray-900 text-center py-4">teigorme</Text>
      <StatusBar barStyle="dark-content" />
    </View>
  );
};

export default Index;
