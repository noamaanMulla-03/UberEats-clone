import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const items = [
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Pickup",
    },
    {
        image: require("../assets/images/soft-drink.png"),
        text: "Soft Drinks",
    },
    {
        image: require("../assets/images/bread.png"),
        text: "Bakery Items",
    },
    {
        image: require("../assets/images/fast-food.png"),
        text: "Fast Foods",
    },
    {
        image: require("../assets/images/deals.png"),
        text: "Deals",
    },
]

export default function Categories() {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                    <View style={styles.categoryContainer} key={index}>
                        <Image style={styles.categoryImages} source={item.image} />
                        <Text style={styles.categoryText}>{item.text}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        backgroundColor: "#ffffff",
        paddingVertical: 10,
        paddingLeft: 30,
    },
    categoryContainer: {
        alignItems: "center",
        marginRight: 30,
    },
    categoryImages: {
        width: 50,
        height: 40,
        resizeMode: "contain",
    },
    categoryText: {
        fontSize: 13,
        fontWeight: "bold"
    },
})