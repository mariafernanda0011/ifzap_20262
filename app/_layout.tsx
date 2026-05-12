import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: "",
        headerStyle: {
          backgroundColor: "#00420c", // Aqui define a cor de fundo
        },
        headerTintColor: "#fff",
      }}
    />
  );
}
