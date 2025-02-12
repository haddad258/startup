import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../../../core/theme";

const Dashboard = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.gradientEffect} />
            <View style={styles.contentContainer}>
                <View>
                    <Text style={styles.title}>Current Budget</Text>
                    <Text style={styles.amount}>5609 $</Text>
                </View>
                <Image
                    source={require('./../../../../assets/erp.png')}
                    style={styles.icon}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height: 150,
        borderRadius: 20,
        borderBottomRightRadius: 20,
        overflow: "hidden", // Ensures content stays within rounded corners
        position: "relative", // Needed for layering
        backgroundColor: Colors.secondary, // Fallback background color
    },
    gradientEffect: {
        ...StyleSheet.absoluteFillObject, // Covers the entire container
        backgroundColor: "rgba(255, 69, 0, 0.2)", // Semi-transparent orange
        borderBottomRightRadius: 20, // Matches parent container
    },
    contentContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "600",
    },
    amount: {
        fontSize: 24,
        color: "#FF4500", // Orange color
        fontWeight: "bold",
    },
    icon: {
        width: 80,
        height: 80,
    },
});

export default Dashboard;
