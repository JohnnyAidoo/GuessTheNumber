import { View } from "react-native";
import { Dimensions, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, Appbar, Surface, Button } from "react-native-paper";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import OtpInputs from "react-native-otp-inputs";
function Game() {
  useFocusEffect(() => {});

  const Color1: string = "#3391F3";
  const Color2: string = "#5573ED";
  const HEIGHT: number = Dimensions.get("screen").height;

  const [Otp, setOtp] = useState("");
  const navigation = useNavigation();
  const number = 12;

  return (
    <>
      <Appbar.Header style={{ backgroundColor: Color1 }}>
        <Appbar.BackAction
          color="white"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </Appbar.Header>
      <LinearGradient
        colors={[Color1, Color2]}
        style={{
          alignItems: "center",
          paddingTop: 50,
          height: HEIGHT,
          paddingHorizontal: 10,
        }}
      >
        <Text
          variant="titleLarge"
          style={{ color: "white", fontWeight: "700" }}
        >
          Guess the Number
        </Text>
        {/* <Text style={{ paddingTop: 20, color: "white" }}>First Guess</Text> */}

        <Surface
          style={{
            backgroundColor: "transparent",
            width: "50%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <FontAwesome name="arrow-circle-o-up" size={50} />
          <OtpInputs
            autofillFromClipboard={false}
            numberOfInputs={2}
            editable={true}
            style={{
              width: "50%",
              height: 80,
              position: "relative",
            }}
            handleChange={(e) => setOtp(e)}
          />
        </Surface>

        <Surface elevation={0}>
          <Text>{Otp}</Text>
        </Surface>

        {/* <Surface style={{ display: "flex" }}>
          <Button>1</Button>
        </Surface> */}
      </LinearGradient>
    </>
  );
}

export default Game;
