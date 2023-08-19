import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Calendar } from "react-native-calendars";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

const Home = ({ navigation }: { navigation: any }) => {
	const [fontsLoaded] = useFonts({
		impact: require("./../assets/fonts/impact.ttf"),
		impacted: require("./../assets/fonts/Impacted.ttf"),
		"Unicode Impact": require("./../assets/fonts/unicodeImpact.ttf"),
	});

	const [selected, setSelected] = useState("");

	const [userName, setUserName] = useState("");
	useEffect(() => {
		getName();
	}, []);

	const getName = async () => {
		try {
			const name = await AsyncStorage.getItem("userName");
			setUserName(name || "Guest");
		} catch (error) {
			console.log(error);
		}
	};

	if (!fontsLoaded) {
		return undefined;
	}

	return (
		<SafeAreaView style={styles.mainContainer}>
			<View
				style={[
					styles.welcomeContainer,
					{ flex: 0 },
					{ width: "100%" },
				]}
			>
				<Text
					style={styles.welcomeFont}
					onPress={() => navigation.navigate("Login")}
				>
					Welcome
				</Text>
				<Text style={styles.nameFont}>{userName}</Text>
			</View>
			<View style={styles.container}>
				<Calendar
					onDayPress={(day) => {
						setSelected(day.dateString);
					}}
					markedDates={{
						[selected]: {
							selected: true,
							disableTouchEvent: true,
							selectedColor: "orange",
						},
					}}
					style={styles.calendar}
				/>
				<View style={styles.waterView}>
					<Text>Yo</Text>
				</View>
			</View>
			<View style={styles.bottomContainer}></View>
			<StatusBar></StatusBar>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		alignItems: "flex-start",
		justifyContent: "flex-start",
		backgroundColor: "#fff3e6",
		paddingLeft: 10,
		paddingTop: 5,
	},

	container: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: "#fff3e6",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		marginLeft: 10,
		marginTop: 5,
	},

	bottomContainer: {
		flex: 1,
		width: "100%",
		flexDirection: "row",
		backgroundColor: "#Dfc7a9",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		marginLeft: 10,
		marginTop: 5,
	},

	welcomeContainer: {
		flex: 1,
		backgroundColor: "#aafed8",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		paddingLeft: 10,
		paddingTop: 5,
	},

	waterView: {
		flex: 1,
		backgroundColor: "#aafed8",
		height: "100%",
	},

	calendar: {
		borderWidth: 1,
		borderColor: "#fff3e6",
		backgroundColor: "#fff3e6",
		height: 30,
	},

	welcomeFont: { fontFamily: "impact", fontSize: 80, marginVertical: 10 },
	nameFont: { fontFamily: "impact", fontSize: 66, marginTop: -25 },
});

export default Home;
