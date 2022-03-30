import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"

const Launch = ({
	navigation,
	mission_name,
	flight_number,
	rocket,
	launch_date_local,
}) => {
	return (
		<TouchableOpacity
			style={styles.launch}
			onPress={() => {
				navigation.navigate(mission_name)
			}}
		>
			<Text style={styles.missionName}>
				{flight_number} : {mission_name}
			</Text>
			<Text style={styles.text}>{rocket.rocket_name}</Text>
			<Text style={styles.text}>{launch_date_local}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	launch: {
		margin: 10,
		marginTop: 3,
		marginBottom: 3,
		padding: 10,
		borderRadius: 5,
		backgroundColor: "white",
		elevation: 1,
	},

	missionName: {
		fontWeight: "bold",
	},

	text: {
		marginBottom: 2,
		marginTop: 2,
	},
})

export default Launch
