import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import { Colors,units } from '../../../core/theme';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }
  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
    this.props.handleNaviagation();
  };
  render() {
    return (
      <TouchableOpacity onPress={this.handleClick}>
        <View
          //elevation={2}
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#ffffff",
            marginHorizontal: 24,
            marginVertical: 8,
            borderRadius: 4,
            shadowOpacity: 0.1,
            shadowRadius: 2,
            shadowOffset: {
              height: 1,
              width: 1
            }
          }}
        >
     
          <View
            style={{
              padding: 16
            }}
          >
            <Text
              style={{
                fontSize: 13,
                color: "#001122"
              }}
              numberOfLines={2}
            >
              {this.props.name}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#666"
              }}
            >
              {this.props.cuisine},{" "}
              {this.props.estValide ? (
                <Text style={{ color: Colors.primary, fontWeight: "bold" }}>
                  Valid
                </Text>
              ) : (
                <Text style={{ color: Colors.error, fontWeight: "bold" }}>
                  Non-valide
                </Text>
              )}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#999"
              }}
            >
            Date :  {this.props.label}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                //width: "100%"
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#ef6136"
                }}
              >
                {this.props.price}
              </Text>
              <View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: Colors.primary
                }}
              >
              </Text>
              </View>
              
              {/* <Button
                onPress={e => alert("Hey")}
                title="ADD"
                style={{
                  backgroundColor: "4099ff",
                  color: "#fff",
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  paddingBottom: 8
                }}
              /> */}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
