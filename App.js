import { Navigation } from './src/application/navigation/Navigation';
import { NativeBaseProvider, ColorMode } from "native-base";
import { NavigationContainer} from "@react-navigation/native";
import { TarefProvider } from './src/context/TarefContext';

export default function App() {
  return (
    <NativeBaseProvider>
      <TarefProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </TarefProvider>
    </NativeBaseProvider>
  );
}
