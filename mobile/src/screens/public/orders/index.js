import React from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Displaycard from "./Displaycard";
import DetailedDisplayCard from "./DetailedDisplayCard";
import { Colors } from "../../../core/theme";

const { width, height } = Dimensions.get("window");

export default function Home() {
  const dummyData = [
    {
      amount: 5628,
      text: "I love cheese",
    },
    {
      amount: 7828,
      text: "Paid in 23 days",
    },
    {
      amount: 65228,
      text: "May not be paid",
    },
    {
      amount: 5238,
      text: "in 23 day or later",
    },
  ];

  const dummyData2 = [
    {
      name: "Bitcoin",
      amount: -2356,
    },
    {
      amount: 563,
      name: "Ethereum",
    },
    {
      name: "ChainLink",
      amount: 26.403,
    },
    {
      name: "Binance Coin",
      amount: 697.43,
    },
    {
      name: "Binance Coin",
      amount: 697.43,
    },
    {
      name: "Binance Coin",
      amount: 697.43,
    },
    {
      name: "Binance Coin",
      amount: 697.43,
    },
  ];

  return (
    <SafeAreaProvider
      style={{
        backgroundColor: Colors.white,
      }}
    >
      <ImageBackground
        style={{
          height: height * 0.3,
          backgroundColor: Colors.white,
        }}
        source={{
          uri: "https://i.ibb.co/2j65Rtw/bg-1.jpg",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: width * 0.05,
            alignItems: "center",
            marginTop: height * 0.02,
            marginBottom: height * 0.05,
          }}
        >
          <View>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/1.jpg",
              }}
              style={{
                height: height * 0.06,
                width: width * 0.1,
                borderRadius: width * 0.12,
                padding: width * 0.07,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              padding: height * 0.013,
              borderRadius: width * 0.01,
            }}
          >
            <Text
              style={{
                color: Colors.secondary,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Payday in a week
            </Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: width * 0.05,
            marginTop: height * 0.05,
            marginBottom: height * 0.02,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            Total Balance to spend
          </Text>
          <Text
            style={{ color: "#fff", fontSize: width * 0.12, fontWeight: "bold" }}
          >
            $763992
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: Colors.white,
          marginHorizontal: width * 0.05,
          paddingVertical: height * 0.02,
        }}
      >
        <Text style={{ fontSize: 22 }}>Planning Ahead</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 20 }}>$430 </Text>
          <Text style={{ color: "grey", fontSize: 20 }}> te </Text>
        </View>
      </View>
      <View
        style={{
          marginLeft: width * 0.05,
        }}
      >
        <FlatList
          data={dummyData}
          renderItem={({ item }) => <Displaycard data={item} />}
          keyExtractor={(item, index) => `${item.amount}${index.toString()}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View
        style={{
          backgroundColor: "silver",
          height: width * 0.002,
          marginVertical: height * 0.025,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: Colors.secondary,
          marginHorizontal: width * 0.05,
          paddingTop: height * 0.02,
        }}
      >
        <Text style={{ fontSize: 22 }}>Last Month Expenses</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 20 }}>$7630 </Text>
          <Text style={{ color: "grey", fontSize: 20 }}> she </Text>
        </View>
      </View>

      <DetailedDisplayCard
        data={dummyData2}
        styles={{ marginHorizontal: width * 0.04 }}
      />

      <StatusBar barStyle="default" backgroundColor={Colors.backgroundColor} />
    </SafeAreaProvider>
  );
}
