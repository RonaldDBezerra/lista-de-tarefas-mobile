import { Navigation } from './src/application/navigation/Navigation';
import { NativeBaseProvider, ColorMode } from "native-base";
import { NavigationContainer} from "@react-navigation/native";

export default function App() {
  return (
  <NativeBaseProvider>
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  </NativeBaseProvider>
  );
}
