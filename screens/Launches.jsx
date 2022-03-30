import { StatusBar } from "expo-status-bar"

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { Text, View, ScrollView, StyleSheet } from "react-native"
import { useState, useEffect } from "react"

import { SafeAreaView } from "react-native-safe-area-context"

import Header from "../components/Header"

import Launch from "../components/Launch"

const LaunchTab = ({ url }) => {
	const [loaded, setLoaded] = useState(false)
	const [data, setData] = useState({})

	const getLaunches = async () => {
		try {
			const jsonRes = await fetch(url)
			const res = await jsonRes.json()

			setData(res)
			setLoaded(true)
		} catch (err) {
			console.log(url)
			console.error(err)
		}
	}

	useEffect(() => {
		getLaunches()
	}, [])

	if (!loaded) {
		return (
			<View>
				<Text>Loading Launches ...</Text>
			</View>
		)
	}

	return (
		<ScrollView style={styles.launches}>
			{data.map((launch, index) => {
				return <Launch key={index} {...launch} />
			})}
		</ScrollView>
	)
}

const PastLaunches = () => (
	<LaunchTab url="https://api.spacexdata.com/v3/launches/past" />
)
const UpcomingLaunches = () => (
	<LaunchTab url="https://api.spacexdata.com/v3/launches/upcoming" />
)

const Tab = createMaterialTopTabNavigator()

// TODO Add modals for Each Launch

const Launches = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Tab.Navigator
				screenOptions={{
					//	tabBarActiveTintColor: "#c874b2",
					tabBarInactiveTintColor: "#0009",
					tabBarPressColor: "#0001",
				}}
			>
				<Tab.Screen name="Upcoming Launches" component={UpcomingLaunches} />
				<Tab.Screen name="Past Launches" component={PastLaunches} />
			</Tab.Navigator>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default Launches
