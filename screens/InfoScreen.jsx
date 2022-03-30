import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native"
import APOD from "../components/APOD"

const InfoScreen = () => {
	return (
		<SafeAreaView>
			<ScrollView>
				<APOD />
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default InfoScreen
