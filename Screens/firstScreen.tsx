import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, Button } from "react-native-paper";
import { Dimensions, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function FirstScreen() {
  const Color1: string = "#3391F3";
  const Color2: string = "#5573ED";
  const HEIGHT: number = Dimensions.get("screen").height;

  const navigation = useNavigation();

  return (
    <>
      <LinearGradient
        colors={[Color1, Color2]}
        style={{
          alignItems: "center",
          paddingTop: 50,
          height: HEIGHT,
          justifyContent: "space-around",
          paddingHorizontal: 20,
        }}
      >
        <StatusBar style="auto" />
        <Image
          style={{ height: 250, aspectRatio: 1 }}
          source={require("../assets/images/icon.png")}
        />
        <Text
          variant="displaySmall"
          style={{ fontWeight: "bold", color: "white" }}
        >
          Guess The Number
        </Text>
        <Text
          style={{ alignSelf: "flex-start", color: "white" }}
          variant="labelLarge"
        >
          Rule Of The Game:
        </Text>
        <Text style={{ color: "white", paddingBottom: 5 }} variant="labelSmall">
          You have three attempts to guess the number between 1 to 99. You will
          be given hint after each guess if the correct answer compared to your
          answer is higher or lower
        </Text>

        <Button
          mode="elevated"
          textColor={Color1}
          icon="play"
          style={{ width: "80%" }}
          onPress={() =>
            //@ts-ignore
            navigation.navigate("Game")
          }
        >
          Start
        </Button>
        <View style={{ height: HEIGHT / 6 }}></View>
      </LinearGradient>
    </>
  );
}

export default FirstScreen;
