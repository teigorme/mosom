import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Button } from "@/components/button";

const Index = () => {
  return (
    <View className="h-full bg-gray-700">
      <View className="flex-1 items-center justify-center px-4">
        <Text className="text-gray-200 text-xl font-bold">
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
