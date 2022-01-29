import { View, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
          <HeaderTabs />
          <SearchBar />
        </View>
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