import { SafeAreaView } from "react-native-safe-area-context"

import {
	Text,
	View,
	StyleSheet,
	ImageBackground,
	ScrollView,
} from "react-native"
import { useState, useEffect } from "react"
import { nasaApiKey } from "../stores/index"
import starsImage from "../assets/images/stars.jpg"

const APOD = () => {
	const [loaded, setLoaded] = useState(false)
	const [data, setData] = useState({})

	const getApod = async () => {
		try {
			const jsonRes = await fetch(
				`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`
			)
			const res = await jsonRes.json()
			setData(res)
			setLoaded(true)
			//console.log(res)
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		getApod()
	}, [])

	if (!loaded) {
		return (
			<SafeAreaView style={styles.container}>
				<Text>Loading Picture of the Day ... </Text>
			</SafeAreaView>
		)
	}

	return (
		<SafeAreaView>
			<ScrollView style={styles.container}>
				<ImageBackground
					source={data.image || starsImage}
					style={styles.imageBackground}
				>
					<Text style={styles.title}>{data.title}</Text>
				</ImageBackground>
				<View style={styles.apodContainer}>
					<Text style={[styles.text, styles.textTitle]}>
						Astronomical Picture of the Day
					</Text>
					<Text style={styles.text}>{data.date}</Text>
					<Text style={[styles.explanation, styles.text]}>
						{data.explanation}
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	imageBackground: {
		height: 250,
		justifyContent: "flex-end",
		alignItems: "flex-end",
		padding: 10,
	},
	title: {
		fontSize: 16,
		color: "#070707",
		backgroundColor: "#fff",
		borderRadius: 10,
		padding: 10,
	},
	explanation: {
		fontSize: 16,
	},
	text: {
		margin: 10,
	},
	textTitle: {
		fontSize: 20,
	},
})

export default APOD
