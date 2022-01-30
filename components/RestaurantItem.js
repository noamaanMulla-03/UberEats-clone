import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RestaurantItem() {
    return (
        <View>
            <RestaurantImage />
        </View>
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

const styles = StyleSheet.create({
    restaurantImage: {
        width: "100%",
        height: 180,
    },
    restaurantImageHeartIcon: {
        position: "absolute",
        right: 20,
        top: 20,
    },
})