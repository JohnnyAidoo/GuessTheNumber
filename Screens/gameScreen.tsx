import { Alert, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, Appbar, Surface, Button, Dialog } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import FreezeOtp from "../components/freezeOtp";

function Game() {
  type answersType = Array<{ answer: string; icon: string }>;

  const [answers, Setanswers] = useState<answersType>([]);
  const [dialog, setdialog] = useState(<></>);
  const [visible, setVisible] = useState(true);

  const Color1: string = "#3391F3";
  const Color2: string = "#5573ED";
  const HEIGHT: number = Dimensions.get("screen").height;
  const navigation = useNavigation();

  const number = 12;

  const checkForAnswer = (code: string) => {
    const intcode = parseInt(code);
    let showicon = "";
    if (intcode > number) {
      showicon = "arrow-circle-o-down";
    } else if (intcode < number) {
      showicon = "arrow-circle-o-up";
    } else {
      showicon = "check-circle-o";
      setdialog(
        <Dialog visible>
          <Dialog.Content>
            <Text> Winner the Number is {number}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setdialog(<></>)}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      );
    }

    let submitedNumber = {
      answer: code,
      icon: showicon,
    };
    Setanswers([...answers, submitedNumber]);

    if (answers.length == 5) {
      setdialog(
        <Dialog visible>
          <Dialog.Content>
            <Text variant="bodyLarge">You Lost</Text>
            <Text>the Number is {number}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setdialog(<></>)}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      );
    }
  };

  return (
    <>
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
        <Text style={{ paddingTop: 20, color: "white" }}>Between 1 and 99</Text>

        {answers.map((item) => (
          <FreezeOtp
            code={item.answer}
            icon={item.icon}
            color={item.icon == "check-circle-o" ? "green" : "red"}
          />
        ))}

        <Surface
          style={{
            backgroundColor: "transparent",
            width: "50%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <FontAwesome name="circle-o" size={50} color="crimson" />
          <OTPInputView
            pinCount={2}
            style={{
              padding: 20,
              width: "75%",
              height: 80,
              position: "relative",
            }}
            onCodeFilled={checkForAnswer}
          />
        </Surface>

        {dialog}
      </LinearGradient>
    </>
  );
}

export default Game;
