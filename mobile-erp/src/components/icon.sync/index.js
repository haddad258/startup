import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../../core/theme";
import { useDispatch, useSelector } from "react-redux";
import { setSyncMode } from "../../store/syncModeSlice";

const SyncModeModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const currentMode = useSelector((state) => state?.syncMode?.mode); // Get current mode
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleOptionSelect = (option) => {
    console.log(`Selected: ${option}`); // Log the selected option
    dispatch(setSyncMode(option)); // Dispatch the selected mode
    closeModal();
  };

  return (
    <View>
      {/* Search Icon */}
      <TouchableOpacity style={styles.iconContainer} onPress={openModal}>
        <Feather name={currentMode==="Offline" ?"wifi-off":"wifi"} size={20} color={Colors.secondary} />
        <Text style={styles.currentModeText}>{currentMode}</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal} // Close modal on back press
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleOptionSelect("Online")}
            >
              <Text style={styles.optionText}>Online</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleOptionSelect("Offline")}
            >
              <Text style={styles.optionText}>Offline</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginLeft: 15, // Adjust based on the placement in your layout
    padding: 10,

  },
  currentModeText: {
    fontSize: 16,
    color: Colors.primary,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  optionButton: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    alignItems: "center",
  },
  optionText: {
    color: "white",
    fontSize: 16,
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: Colors.gray,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  closeText: {
    color: "white",
    fontSize: 16,
  },
});

export default SyncModeModal;
