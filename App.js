import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { StyleSheet } from "react-native"

import { StatusBar } from "expo-status-bar"
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaProvider } from "react-native-safe-area-context"

import InfoScreen from "./screens/InfoScreen"
import Launches from "./screens/Launches"
import Satellites from "./screens/Satellites"
import News from "./screens/News"
import Test from "./screens/Test"

const tabs = [
	{
		name: "Info",
		component: InfoScreen,
		iconOutline: "information-circle-outline",
		iconFilled: "information-circle",
	},
	{
		name: "Launches",
		component: Launches,
		iconOutline: "rocket-outline",
		iconFilled: "rocket",
	},
	{
		name: "News",
		component: News,
		iconOutline: "newspaper-outline",
		iconFilled: "newspaper",
	},
	/*
	{
		name: "Satellites",
		component: Satellites,
		iconOutline: "planet-outline",
		iconFilled: "planet",
	},
	 {
		name: "Test",
		component: Test,
		iconOutline: "bug-outline",
		iconFilled: "bug",
	}, */
]

const primaryColor = "#430d4b"

const Tab = createBottomTabNavigator()

const App = () => {
	return (
		<SafeAreaProvider>
			<StatusBar backgroundColor="#c874b2" />
			<NavigationContainer>
				<Tab.Navigator>
					{tabs.map((tab, index) => {
						return (
							<Tab.Screen
								key={index}
								name={tab.name}
								component={tab.component}
								options={{
									tabBarIcon: ({ focused }) => {
										if (focused) {
											return (
												<Ionicons
													name={tab.iconFilled}
													size={20}
													color="#c874b2"
												/>
											)
										}
										return (
											<Ionicons
												name={tab.iconOutline}
												size={20}
												color="#0009"
											/>
										)
									},
									tabBarActiveTintColor: "#c874b2",
									tabBarInactiveTintColor: "#0009",
									headerShown: false,
								}}
							/>
						)
					})}
				</Tab.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}

const styles = StyleSheet.create({
	container: {},
})

export default App
