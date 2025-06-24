import {Stack} from "expo-router";

export default function ModalsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='settings'
        options={{
          title: "Settings",
          headerShown: false,
          presentation: "modal"
        }}
      />
    </Stack>
  );
}
