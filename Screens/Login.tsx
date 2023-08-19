import { useState, useEffect } from "react";
import {
	StyleSheet,
	SafeAreaView,
	Text,
	TextInput,
	Button,
	View,
	Alert,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }: { navigation: any }) => {
	const [name, setName] = useState("");

	useEffect(() => {
		checkName();
	}, []);

	const saveName = async (name: string) => {
		if (name.length === 0) {
			Alert.alert("Enter a valid name!");
		} else {
			try {
				await AsyncStorage.setItem("userName", name);
				navigation.navigate("HomeControl");
			} catch (error) {
				console.log(error);
			}
		}
	};

	const checkName = async () => {
		try {
			const tempName = await AsyncStorage.getItem("userName");
			if (tempName != null) {
				navigation.navigate("HomeControl");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text onPress={() => navigation.navigate("HomeControl")}>
				Set Name
			</Text>
			<TextInput
				style={styles.input}
				placeholder="Enter your name..."
				onChangeText={(value) => setName(value)}
			/>
			<Button title="Confirm" onPress={() => saveName(name)}></Button>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fed8aa",
		alignItems: "center",
		justifyContent: "center",
	},

	input: {
		width: "40%",
		height: "5%",
		borderWidth: 2,
		borderColor: "#555",
		borderRadius: 10,
		backgroundColor: "#ffffff",
		textAlign: "center",
		fontSize: 20,
		marginBottom: 10,
	},
});

export default Login;
