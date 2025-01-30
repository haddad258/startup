import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import { CameraView } from "expo-camera";
import Icon from "react-native-vector-icons/Entypo";
import { ArticleSettings } from "../../../../service/doctype";
import ArticleCard from "../ArticleIndex";
import { Colors } from "../../../../core/theme";

export default function CameraValidate() {
  const [modalVisible, setModalVisible] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [Barcode, setBarcode] = useState("");
  const [List, setList] = useState([]);

  const handleBarcodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Scanned type: ${type}, data: ${data}`);
    setBarcode(data);
    fetchArticles(data); // Close modal on successful scan
  };


  const fetchArticles = async (barcode) => {
    try {
    setList([])
    const BarcodeSearch = await ArticleSettings.getarticlesBarcode({
        search_value: barcode,
      });

      if (BarcodeSearch) {
        fetchArticlesBarcode(BarcodeSearch.message.item_code);
        closeModal(); // Close modal on successful scan
      }
    } catch (error) {
      closeModal(); // Close modal on successful scan
      console.error("Error BarcodeSearch:", error);
    }
  };

  const fetchArticlesBarcode = async (filter) => {
    try {
      const list = await ArticleSettings.getarticles(`?fields=["*"]`);
      if (list) {
        setList(list?.data);
      }
    } catch (error) {
      console.error("Error fetching article list:", error);
    }
  };

  const openModal = () => {
    setScanned(true);
    setModalVisible(true);
  };

  const closeModal = () => {
    setScanned(false);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Barcode"
          underlineColorAndroid="transparent"
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

      <View style={styles.listContainer}>
        <FlatList
          data={List}
          renderItem={({ item }) => <ArticleCard item={item} />}
          keyExtractor={(item) => item.name}
          contentContainerStyle={styles.flatListContent}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          ListEmptyComponent={
            <Text style={styles.emptyMessage}>No articles found.</Text>
          }
        />
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => closeModal()}
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

                {scanned && (
                  <TouchableOpacity
                    onPress={() => setScanned(false)}
                    style={styles.btnClose}
                  >
                    <Text style={styles.txtClose}>Scan Again</Text>
                  </TouchableOpacity>
                )}
              </ScrollView>
            </View>
            <View style={styles.popupButtons}>
              <TouchableOpacity onPress={() => closeModal()} style={styles.btnClose}>
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
    flex:1,
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
    backgroundColor: "#f9f9f9",
    borderRadius: 25,
    width: 320,
    height: 50,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginTop:50
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    flex: 1,
  },
  listContainer: {
    width: "100%",
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
  },
  flatListContent: {
    paddingVertical: 10,
  },
  itemSeparator: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },
  emptyMessage: {
    textAlign: "center",
    color: "#999",
    fontSize: 16,
    marginTop: 20,
  },
});
