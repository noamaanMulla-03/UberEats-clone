import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    },
];

export default function RestaurantItems() {
    return (
        <TouchableOpacity style={styles.restaurantItemContainer} activeOpacity={1}>
            {localRestaurants.map((restaurant, index) => (
                <View style={styles.restaurantItem} key={index}>
                    <RestaurantImage image_url={restaurant.image_url} />
                    <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                </View>
            ))}
        </TouchableOpacity>
    );
}

const RestaurantImage = ({ image_url }) => (
    <React.Fragment>
        <Image style={styles.restaurantImage} source={{ uri: image_url }} />
        <TouchableOpacity style={styles.restaurantImageHeartIcon}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#ffffff" />
        </TouchableOpacity>
    </React.Fragment>
)

const RestaurantInfo = ({ name, rating }) => (
    <View style={styles.restaurantInfo}>
        <View>
            <Text style={styles.restaurantInfoTitle}>{name}</Text>
            <Text style={styles.restaurantInfoCookingTime}>30 - 45 · min</Text>
        </View>
        <View style={styles.restaurantInfoItemRating}>
            <Text>{rating}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    restaurantItemContainer: {
        marginBottom: 30,
    },
    restaurantItem: {
        marginTop: 10,
        padding: 15,
        backgroundColor: "#ffffff"
    },
    restaurantImage: {
        width: "100%",
        height: 180,
    },
    restaurantImageHeartIcon: {
        position: "absolute",
        right: 20,
        top: 20,
    },
    restaurantInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
    restaurantInfoTitle: {
        fontSize: 15,
        fontWeight: "bold",
    },
    restaurantInfoCookingTime: {
        fontSize: 13,
        color: "#808080",
    },
    restaurantInfoItemRating: {
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center",
    },
})