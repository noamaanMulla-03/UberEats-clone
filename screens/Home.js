import { View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import React from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItem from '../components/RestaurantItem';

export default function Home() {
	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<HeaderTabs />
				<SearchBar />
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<RestaurantItem />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: StatusBar.currentHeight,
		backgroundColor: "#eeeeee",
		flex: 1
	},
	headerContainer: {
		backgroundColor: "#ffffff",
		padding: 15,
	},
})