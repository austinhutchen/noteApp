import { ActivityIndicator, Text, View } from "react-native";
import { useEffect, useState} from "react";
import { StatusBar } from "expo-status-bar";

export default function fquote() {
  const fetch = () => {
    return <ActivityIndicator size="large"></ActivityIndicator>;
  };
  return (
    <View>
      {fetch()}
      <StatusBar style="auto"></StatusBar>
    </View>
  );
}

