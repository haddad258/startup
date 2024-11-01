import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";

class CartButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleNavigate = this.handleNavigate.bind(this);
  }

  handleNavigate = () => {
    this.props.onPress();
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handleNavigate}>
        <Image
          style={{ width: 32, height: 32, marginRight: 16 }}
          source={{uri:"https://i.ibb.co/SdPsJYp/Screenshot-from-2024-10-22-08-26-07.png"}}
        />
        <View
          style={{
            height: 20,
            width: 20,
            borderRadius: 10,
            backgroundColor: "#ef6136",
            position: "absolute",
            right: 8,
            top: 2
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 13,
              textAlign: "center",
              lineHeight: 20
            }}
          >
            12
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default CartButton;
