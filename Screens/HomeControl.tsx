import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";

const Tab = createBottomTabNavigator();

const HomeControl = ({ navigation }: { navigation: any }) => {
	return (
		<View style={styles.container}>
			<Tab.Navigator screenOptions={{ headerShown: false }}>
				<Tab.Screen name="Home" component={Home} />
			</Tab.Navigator>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fed8aa",
	},
});

export default HomeControl;
