import { Text, View } from "react-native";
import Header from "./../components/Header";
import Hero from "../components/Hero";

export default function Index() {
  return (
    <View
      style={{flex: 1, alignItems: "center",}}>
      <Header/>
      <Hero/>

    </View>
  );
}
