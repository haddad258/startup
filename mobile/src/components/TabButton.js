import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import { MaterialCommunityIcons, AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';

export const TabButton =({currentTab, setCurrentTab, text, icon} )=>{
    return (

        <TouchableOpacity onPress={() => {
            if (text == "LogOut") {
                // Do your Stuff...
            } else {
                setCurrentTab(text)
            }
        }}>
            <View style={{
                flexDirection: "row",
                alignItems: 'center',
                paddingVertical: 8,
                backgroundColor: currentTab == text ? 'white' : 'transparent',
                paddingLeft: 13,
                paddingRight: 35,
                borderRadius: 8,
                marginTop: 15
            }}>

             
             <Entypo name="home" color={color} size={size*0.9} />
                <Text style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    paddingLeft: 15,
                    color: currentTab == text ? "#5359D1" : "white"
                }}>{text}</Text>

            </View>
        </TouchableOpacity>
    );
}