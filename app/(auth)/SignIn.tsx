import { View, Text, Button } from "react-native";
import { router } from "expo-router";

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Button title="Sign Up" onPress={() => router.push("/SignUp")} />
    </View>
  );
};

export default SignIn;
