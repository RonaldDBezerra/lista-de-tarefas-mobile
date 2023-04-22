import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { Home } from "../screens/Home";
import { Create } from "../screens/Create";
import { Notification } from "../screens/Notification"
import Icon from "react-native-vector-icons/Ionicons"

const {Screen, Navigator} = createBottomTabNavigator();

export function Navigation() {

  return(
    <Navigator 
      screenOptions={({route}) =>({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

          if (route.name === "home") {
            iconName = "home-outline"
            colorApp = focused && "#3a49f9"
          } else if (route.name === "create") {
            iconName = "clipboard-outline"
          } else if (route.name === "notification") {
            iconName = "notifications-outline"
          }

          return <Icon name={iconName} size={22} color={color} />
        }
        }
        )} >
        <Screen
          name="home"
          component={Home}
          options={{headerShown: false, tabBarShowLabel: false}}
          />

        <Screen
          name="create"
          component={Create}
          options={{headerShown: false, tabBarShowLabel: false}}
          />

        <Screen
          name="notification"
          component={Notification}
          options={{headerShown: false, tabBarBadge: 2}}
          />
    </Navigator>
  )
}