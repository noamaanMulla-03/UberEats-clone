import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Delivery")

    return (
        <View style={styles.headerContainer}>
            <HeaderButton buttonName="Delivery" activeTab={activeTab} setActiveTab={setActiveTab} />
            <HeaderButton buttonName="Pickup" activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
    );
}

const HeaderButton = ({ buttonName, activeTab, setActiveTab }) => (
    <TouchableOpacity style={{ backgroundColor: activeTab === buttonName ? "#000000" : "#ffffff", ...styles.headerButton, }} onPress={() => setActiveTab(buttonName)}>
        <Text style={{ color: activeTab === buttonName ? "#ffffff" : "#000000", ...styles.headerButtonText, }}>{buttonName}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        alignSelf: "center"
    },
    headerButton: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
    },
    headerButtonText: {
        fontSize: 15,
        fontWeight: "700"
    }
})