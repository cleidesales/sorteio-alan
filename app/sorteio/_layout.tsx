import { Stack } from 'expo-router';

export default function SorteioLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: '',          
        }}
      />
      <Stack.Screen
        name="realizar"
        options={{
          title: '',         
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          title: '',          
          presentation: '',
        }}
      />
    </Stack>
  );
}
