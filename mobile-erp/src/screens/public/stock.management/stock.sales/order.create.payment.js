import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View, Modal, FlatList, ScrollView } from "react-native";
import { Colors } from "../../../../core/theme";
import { OrderSettings } from "../../../../service/doctype";
import SelectInputDocs from "../../../../components/Doctype/SelectInputDocs";
import TextInputDoc from '../../../../components/Doctype/TextInputDoc';

const CreatePayment = ({ order }) => {
    const [orderDetail, setOrderDetail] = useState({});
    const [paymentMode, setpaymentMode] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const [paid_amount,setpaid_amount]=useState("")
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
            console.log(orderDetail.customer)

            const paymentData = {
                doctype: 'Payment Entry',
                payment_type: 'Receive',
                party_type: 'Customer',
                party: orderDetail.customer, // Le client associé à la commande
                paid_amount: parseFloat(paid_amount),
                received_amount: parseFloat(paid_amount),
                mode_of_payment: paymentMode,
                "target_exchange_rate": 1.0,
                "paid_to": "Bank - CO",
                "paid_to_account_currency": "USD",
                references: [
                    {
                        reference_doctype: 'Sales Order',
                        reference_name: orderDetail.name, // Nom ou ID de la commande de vente
                        allocated_amount: orderDetail.total,
                    },
                ],
            };
            const list = await OrderSettings.createPaymentEntry(paymentData);
            if (list) {
                setModalVisible(false); // Show modal after fetching data
            }
        } catch (error) {
            console.error("Error fetching order details:", error);
        }
    };
    return (
        <View>
            {order.status !== "Draft" && <TouchableOpacity
                style={[styles.badge, { backgroundColor: Colors.primary }]}
                onPress={fetchOrders}
            >
                <Text style={styles.badgeText}>Create Payment</Text>
            </TouchableOpacity>
            }
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)} // Close modal on back button press
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <ScrollView contentContainerStyle={styles.scrollViewContent}>
                            <Text style={styles.modalTitle}>commande Num - {order.name}</Text>
                            {/* Render order details */}
                            <Text style={styles.detailText}>Clients: {orderDetail.customer}</Text>
                            <Text style={styles.detailText}>Status: {orderDetail.status}</Text>
                            <Text style={styles.detailText}>total: {orderDetail.total}</Text>
                        

                            <View style={styles.divider} />
                            <SelectInputDocs
                                placeholder="payment Mode"
                                value={paymentMode}
                                onChangeText={(option) => setpaymentMode(option.name)}
                                style={styles.input}
                                doctype="Mode of Payment"
                            />
                            <TextInputDoc
                                placeholder="paid_amount"
                                value={paid_amount}
                                onChangeText={(text) => setpaid_amount(text)}
                                style={styles.input}
                            />

                            <View style={styles.divider} />


                            {/* Print and Close Buttons */}

                        </ScrollView>
                        <TouchableOpacity onPress={() => updateOrders()} style={styles.btnPrintC}>
                                <Text style={styles.btnText}>Confirmer</Text>
                            </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.btnPrint}>
                            <Text style={styles.btnText}>fermer</Text>
                        </TouchableOpacity>
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
    btnPrintC: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.primary,
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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Darker overlay
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

export default CreatePayment;
