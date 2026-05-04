import { Text, View, ActivityIndicator } from "react-native";
import lottieView from "lottie-react-native";
import LottieView from "lottie-react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 50,
      }}
    >
     <ActivityIndicator size="large"/> 

     <LottieView
      source={require("./../assets/loading.json")}
      autoPlay
      loop
      style={{ width: 50, height: 500 }}
     />
    </View>
    
  );
}
