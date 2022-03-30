import { View, Text, StyleSheet } from "react-native"
import React from "react"

const Header = ({ title }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>{title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "white",
		padding: 10,
	},

	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
})

export default Header
