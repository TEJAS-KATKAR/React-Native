import { Text, View, ScrollView} from "react-native";
import Header from "../components/Header";
import Hero from "../components/Hero";  
import Categories from "../components/Categories";

export default function Index() {
  return (
    <View
      style={{flex: 1, alignItems: "center",}}>
      <ScrollView>
      <Header/>
      <Hero/>
      <Categories/>
      </ScrollView>
    </View>
    
  );
}
