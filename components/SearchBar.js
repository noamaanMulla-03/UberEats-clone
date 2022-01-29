import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                styles={{
                    textInput: {
                        backgroundColor: "#eeeeee",
                        borderRadius: 20,
                        fontWeight: "700",
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 10,
                    },
                }}
                placeholder='Search'
                renderLeftButton={() => (
                    <View style={styles.locationButton}>
                        <Ionicons name="location-sharp" size={24} color="#000" />
                    </View>
                )}
                renderRightButton={() => (
                    <View style={styles.searchButton}>
                        <AntDesign style={styles.searchButtonIcon} name="clockcircle" size={11} />
                        <Text>Search</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flexDirection: "row",
    },
    locationButton: {
        marginLeft: 10,
    },
    searchButton: {
        flexDirection: "row",
        marginRight: 8,
        backgroundColor: "#ffffff",
        padding: 9,
        borderRadius: 30,
        alignItems: "center",
    },
    searchButtonIcon: {
        marginRight: 6,
    }
})