import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

const { Screen, Navigator} = createBottomTabNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

export function TabsRoutes(){
    return(
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'blue'
                
            }}
        >
            <Screen
                name='screenA'
                component={ScreenA}

                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    )
                }}
                
            />
            <Screen
                name='screenB'
                component={ScreenB}

                options={{
                    tabBarLabel: 'Tela B',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons
                            name="logout"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Navigator>
    )
}