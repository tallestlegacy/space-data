import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"

import * as Linking from "expo-linking"

const NewsArticle = ({ title, summary, imageUrl, url }) => {
	return (
		<TouchableOpacity
			style={styles.article}
			onPress={() => {
				Linking.openURL(url)
			}}
		>
			<Image source={{ uri: imageUrl }} style={styles.image} />
			<View style={styles.description}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.summary}>{summary}</Text>
			</View>
		</TouchableOpacity>
	)
}

const x = 10

const styles = StyleSheet.create({
	article: {
		margin: 10,
		borderBottomLeftRadius: x,
		borderBottomRightRadius: x,
		borderTopLeftRadius: x,
		borderTopRightRadius: x,
		backgroundColor: "white",
		elevation: 2,
		shadowColor: "#0003",
	},
	title: {
		fontWeight: "bold",
	},
	summary: {
		color: "#0009",
	},

	image: {
		width: "100%",
		height: 250,
		borderTopLeftRadius: x,
		borderTopRightRadius: x,
	},

	description: {
		padding: 10,
	},
})

export default NewsArticle
