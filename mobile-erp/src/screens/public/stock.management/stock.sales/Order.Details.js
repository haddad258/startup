import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View, Modal, FlatList, ScrollView } from "react-native";
import { Colors } from "../../../../core/theme";
import { OrderSettings } from "../../../../service/doctype";
import PrintOrder from "../../../../components/printer";

const StatusBadge = ({ order,onreload }) => {
    const [orderDetail, setOrderDetail] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    // Define background colors for different statuses
    const statusColors = {
        Draft: "#FFA500",
        "To Deliver and Bill": "#4682B4",
        "On Hold": "#800080",
        Delivered: "#32CD32",
        Cancelled: "#FF4500",
    };

    const fetchOrders = async () => {
        try {
            const list = await OrderSettings.getorders(order.name);
            if (list) {
                setOrderDetail(list?.data);
                setModalVisible(true); // Show modal after fetching data
            }
        } catch (error) {
            console.error("Error fetching order details:", error);
        }
    };
    const updateOrders = async () => {
        try {
                console.log("list")
                const list = await OrderSettings.updateorders(order.name, {
                "docstatus": 1
            });
                console.log("list",list)
                if (list) {
                console.log(list)
                setOrderDetail(list?.data);
                onreload()
            }
        } catch (error) {
            console.error("Error fetching order details:", error);
        }
    };
    return (
        <View>
            <TouchableOpacity
                style={[styles.badge, { backgroundColor: statusColors[order.status] || Colors.primary }]}
                onPress={fetchOrders}
            >
                <Text style={styles.badgeText}>{order.status}</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)} // Close modal on back button press
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <ScrollView contentContainerStyle={styles.scrollViewContent}>
                            <Text style={styles.modalTitle}>Order Details - {order.name}</Text>
                            {/* Render order details */}
                            <Text style={styles.detailText}>Customer: {orderDetail.customer}</Text>
                            <Text style={styles.detailText}>Status: {orderDetail.status}</Text>
                            <PrintOrder orderDetail={orderDetail} />
                            <TouchableOpacity onPress={() => updateOrders()} style={styles.btnPrint}>
                                <Text style={styles.btnText}>Submit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.btnPrint}>
                                <Text style={styles.btnText}>Close</Text>
                            </TouchableOpacity>
                            <View style={styles.divider} />
                            <FlatList
                                data={orderDetail?.items}
                                renderItem={({ item }) => (
                                    <View style={styles.itemCard}>
                                        <Text style={styles.itemName}>{item.item_code}</Text>
                                        <Text style={styles.itemDetail}>Qty: {item.qty}</Text>
                                        <Text style={styles.itemDetail}>Amount: {item.amount}</Text>
                                    </View>
                                )}
                                keyExtractor={(item) => item.name}
                            />
                            <View style={styles.divider} />
                            <View style={styles.totalRow}>
                                <Text style={styles.totalText}>Total</Text>
                                <Text style={styles.totalText}>{orderDetail.total}</Text>
                            </View>

                            {/* Print and Close Buttons */}

                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    badge: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 25,
        justifyContent: "center",
        marginVertical: 10,
        alignItems: "center",
    },
    printText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 10,
    },
    btnPrint: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.gray,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
    },
    badgeText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 12,
    },
    modalOverlay: {
        flex: 1,
        alignItems: "center",
        marginTop:10,
        paddingTop:10,
        backgroundColor: "rgba(0, 0, 0, 0.3)", // Darker overlay
    },
    modalContent: {
        width: "90%",
        height: "80%", // Set a fixed height for the modal
        padding: 25,
        backgroundColor: "#fff",
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 7,
    },
    scrollViewContent: {
        flexGrow: 1, // Ensures content takes up the available space
        paddingBottom: 20, // Add padding for better spacing
    },
    modalTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 15,
        textAlign: "center",
    },
    detailText: {
        fontSize: 14,
        color: "#555",
        marginVertical: 5,
    },
    divider: {
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
        marginVertical: 15,
    },
    itemCard: {
        backgroundColor: "#f9f9f9",
        padding: 15,
        borderRadius: 10,
        marginVertical: 5,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    itemName: {
        fontSize: 14,
        fontWeight: "600",
        color: "#333",
    },
    itemDetail: {
        fontSize: 14,
        color: "#555",
    },
    totalRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    totalText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    closeButton: {
        backgroundColor: Colors.colorTiers,
        marginTop: 30,
        padding: 10,
        alignSelf: "center",
        borderRadius: 20,
    },
    gradientButton: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    btnText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    },
});

export default StatusBadge;
