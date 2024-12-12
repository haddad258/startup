import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
  TextInput,
  Button
} from "react-native";
import { CameraView } from "expo-camera";
import Icon from "react-native-vector-icons/Entypo";
import { ArticleSettings } from "../../../../service/doctype";

export default function CameraValidate() {
  const [modalVisible, setModalVisible] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [Barcode, setBarcode] = useState(false);

  const handleBarcodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Scanned type: ${type}, data: ${data}`);
    setBarcode(data)
    fetchArticles(data); // Close modal on successful scan
  };
  const fetchArticles = async (barcode) => {
    try {
      const BarcodeSearch = await ArticleSettings.getarticlesBarcode({ search_value: barcode });
      if (BarcodeSearch) {
        colseModal(); // Close modal on successful scan
        // setList(list?.data);
        console.log(BarcodeSearch?.data);
      }
    } catch (error) {
      colseModal(); // Close modal on successful scan
      console.error('Error BarcodeSearch:', error);
    }
  };
  const openModal = () => {
    setScanned(true)
    setModalVisible(true)
  }
  const colseModal = () => {
    setScanned(false)
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Barcode"
          underlineColorAndroid='transparent'
          value={Barcode}
          onChangeText={(text) => setBarcode(text)}
        />

        <Icon
          style={styles.demoIcon}
          name="camera"
          size={40}
          color="#000000"
          onPress={() => openModal()}
        />
      </View>


      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => colseModal()}
      >
        <View style={styles.popupOverlay}>
          <View style={styles.popup}>
            <View style={styles.popupContent}>
              <Text style={styles.title}>Scan Barcode</Text>
              <ScrollView contentContainerStyle={styles.modalInfo}>
                <CameraView
                  onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
                  barcodeScannerSettings={{
                    barcodeTypes: [
                      "qr",
                      "pdf417",
                      "aztec",
                      "ean13",
                      "ean8",
                      "upc_e",
                      "datamatrix",
                      "code39",
                      "code93",
                      "itf14",
                      "codabar",
                      "code128",
                      "upc_a",
                    ],
                  }}
                  style={styles.camera}
                />
              
              {  scanned &&  <TouchableOpacity
                onPress={() => setScanned(false)}
                style={styles.btnClose}
              >
                <Text style={styles.txtClose}>Scan Again</Text>
              </TouchableOpacity>}
              </ScrollView>
            </View>
            <View style={styles.popupButtons}>
              <TouchableOpacity
                onPress={() => colseModal()}
                style={styles.btnClose}
              >
                <Text style={styles.txtClose}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  demoIcon: {
    alignSelf: "center",
  },
  popup: {
    backgroundColor: "white",
    marginHorizontal: 10,
    marginTop: 80,
    borderRadius: 7,
    overflow: "hidden",
  },
  popupOverlay: {
    backgroundColor: "#00000057",
    flex: 1,
    justifyContent: "center",
  },
  popupContent: {
    padding: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  modalInfo: {
    padding: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    height: 360,
    width: 350,
    alignSelf: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  popupButtons: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#eee",
    justifyContent: "center",
    paddingVertical: 10,
  },
  btnClose: {
    backgroundColor: "#20b2aa",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  txtClose: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 25,
    width: 320,
    height: 50,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },

  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
});
