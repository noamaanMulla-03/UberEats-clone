import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RestaurantItem() {
    return (
        <TouchableOpacity style={styles.restaurantItemContainer} activeOpacity={1}>
            <View style={styles.restaurantItem}>
                <RestaurantImage />
                <RestaurantInfo />
            </View>
        </TouchableOpacity>
    );
}

const RestaurantImage = () => (
    <React.Fragment>
        <Image style={styles.restaurantImage} source={{ uri: 'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg' }} />
        <TouchableOpacity style={styles.restaurantImageHeartIcon}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#ffffff" />
        </TouchableOpacity>
    </React.Fragment>
)

const RestaurantInfo = () => (
    <View style={styles.restaurantInfo}>
        <View>
            <Text style={styles.restaurantInfoTitle}>Farmhouse Kitchen Thai Cuisine</Text>
            <Text style={styles.restaurantInfoCookingTime}>30 - 45 · min</Text>
        </View>
        <View style={styles.restaurantInfoItemRating}>
            <Text>4.5</Text>
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