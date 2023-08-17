import { Surface, Text } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

function FreezeOtp(props: { code: string; icon: any; color: string }) {
  return (
    <>
      <Surface
        elevation={0}
        style={{
          backgroundColor: "transparent",
          width: "50%",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <FontAwesome name={props.icon} size={50} color={props.color} />
        <Text variant="displayLarge" style={{ fontWeight: "bold" }}>
          {props.code}
        </Text>
      </Surface>
    </>
  );
}

export default FreezeOtp;
