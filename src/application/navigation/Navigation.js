import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { TabNavigation } from "./TabNavigation";

const {Screen, Navigator} = createNativeStackNavigator();

export function Navigation() {

  return(
    <Navigator> 
    
        <Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
          />

        <Screen
          name="Tab"
          component={TabNavigation}
          options={{headerShown: false, tabBarShowLabel: false}}
          />
    </Navigator>
  )
}