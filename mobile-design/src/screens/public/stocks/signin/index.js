import React, { useContext } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import CustomButton from "./CustomButton";
import InputField from "./InputField";
import { Colors } from "../../../../core/theme";

const LoginScreen = ({ navigation }) => {

    return (
        <SafeAreaView
            style={{
                backgroundColor: Colors.gray,
                flex: 1,
                justifyContent: "center",
            }}
        >
            <View style={{ paddingHorizontal: 25 }}>
                <View style={{ alignItems: "center" }}>
                    <Image
                        source={require("../../../../../assets/google.png")}
                        style={{
                            height: 200,
                            width: 300,
                            transform: [{ rotate: "-5deg" }],
                        }}
                    />
                </View>

                <Text
                    style={{
                        fontSize: 28,
                        fontWeight: "500",
                        color: Colors.tint,
                        marginBottom: 30,
                    }}
                >
                    Login
                </Text>

                <InputField
                    selectionColor={Colors.tint}
                    label={"Email ID"}
                    icon={
                        <MaterialIcons
                            name="alternate-email"
                            size={20}
                            color="#666"
                            style={{ marginRight: 5 }}
                        />
                    }
                    keyboardType="email-address"
                />

                <InputField
                    label={"Password"}
                    icon={
                        <Ionicons
                            name="ios-lock-closed-outline"
                            size={20}
                            color="#666"
                            style={{ marginRight: 5 }}
                        />
                    }
                    inputType="password"
                    fieldButtonLabel={"Forgot?"}
                    fieldButtonFunction={() => { }}
                />

                <CustomButton
                    label={"Login"}
                    onPress={() => {
                        navigation.navigate("Footer");
                    }}
                />

                <Text
                    style={{
                        textAlign: "center",
                        color: Colors.tint,
                        marginBottom: 30,
                    }}
                >
                    Or, login with ...
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 30,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => { }}
                        style={{
                            backgroundColor: Colors.secondary,
                            borderRadius: 10,
                            paddingHorizontal: 30,
                            paddingVertical: 10,
                        }}
                    >
                        <Image
                            source={require("../../../../../assets/google.png")}
                            style={{ height: 24, width: 24 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={{
                            backgroundColor: Colors.secondary,
                            borderRadius: 10,
                            paddingHorizontal: 30,
                            paddingVertical: 10,
                        }}
                    >
                        <Image
                            source={require("../../../../../assets/google.png")}
                            style={{ height: 24, width: 24 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={{
                            backgroundColor: Colors.secondary,
                            borderRadius: 10,
                            paddingHorizontal: 30,
                            paddingVertical: 10,
                        }}
                    >
                        <Image
                            source={require("../../../../../assets/google.png")}
                            style={{ height: 24, width: 24 }}
                        />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        marginBottom: 30,
                    }}
                >
                    <Text style={{ color: Colors.tint }}>New to the app? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={{ color: Colors.accent, fontWeight: "700" }}>
                            {" "}
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;
