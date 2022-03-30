import { View, Text, ScrollView, StyleSheet } from "react-native"
import { useState, useEffect } from "react"

import { SafeAreaView } from "react-native-safe-area-context"

import Header from "../components/Header"
import NewsArticle from "../components/NewsArticle"

const News = () => {
	const [loaded, setLoaded] = useState(false)
	const [data, setData] = useState({})

	const getNews = async () => {
		try {
			const jsonRes = await fetch(
				"https://api.spaceflightnewsapi.net/v3/articles"
			)

			const res = await jsonRes.json()

			setData(res)
			setLoaded(true)
		} catch (err) {
			console.error(err)
		}
	}

	useEffect(() => {
		getNews()
	}, [])

	if (!loaded) {
		return (
			<SafeAreaView>
				<Header title="Space News" />
				<View>
					<Text>Loading Space News ...</Text>
				</View>
			</SafeAreaView>
		)
	}

	return (
		<SafeAreaView>
			<Header title="Space News" />
			<ScrollView style={styles.news}>
				{data.map((article, index) => (
					<NewsArticle {...article} key={index} />
				))}
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	news: {},
})

export default News
