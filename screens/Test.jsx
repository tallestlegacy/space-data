import { View, Text, Button } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text style={{ fontSize: 30 }}>This is the home screen!</Text>
			<Button
				onPress={() => navigation.navigate("MyModal")}
				title="Open Modal"
			/>
		</View>
	)
}

function DetailsScreen() {
	return (
		<View>
			<Text>Details</Text>
		</View>
	)
}

function ModalScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text style={{ fontSize: 30 }}>This is a modal!</Text>
			<Button onPress={() => navigation.goBack()} title="Dismiss" />
		</View>
	)
}

const RootStack = createNativeStackNavigator()

function RootStackScreen() {
	return (
		<RootStack.Navigator>
			<RootStack.Group>
				<RootStack.Screen name="Home" component={HomeScreen} />
				<RootStack.Screen name="Details" component={DetailsScreen} />
			</RootStack.Group>
			<RootStack.Group screenOptions={{ presentation: "modal" }}>
				<RootStack.Screen name="MyModal" component={ModalScreen} />
			</RootStack.Group>
		</RootStack.Navigator>
	)
}

export default RootStackScreen
