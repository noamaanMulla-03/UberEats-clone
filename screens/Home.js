import { View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';
import { YELP_API_KEY } from "@env";

export default function Home() {
	const [restaurantData, setRestaurantData] = useState(localRestaurants);

	const getRestaurantsFromYelp = () => {
		const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego";

		const apiOptions = {
			headers: {
				Authorization: `BEARER ${YELP_API_KEY}`,
			},
		};

		return fetch(yelpUrl, apiOptions)
			.then(res => res.json())
			.then(json => setRestaurantData(json.businesses))
	};

	useEffect(() => {
		getRestaurantsFromYelp();
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<HeaderTabs />
				<SearchBar />
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<RestaurantItems restaurantData={restaurantData} />
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