import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Screens/Login";
import Home from "./Screens/HomeControl";

const Stack = createStackNavigator();

export default function App() {
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Login"
						component={Login}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="HomeControl"
						component={Home}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
				<StatusBar style="auto" />
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fed8aa",
	},
});
