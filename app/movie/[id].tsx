import {useLocalSearchParams} from "expo-router";
import {Text, View} from "react-native";

export default function Details() {
  const {id} = useLocalSearchParams();
  return (
    <View>
      <Text>Movie Deatils: {id}</Text>
    </View>
  );
}
