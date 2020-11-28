import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import * as Actions from "../actions";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleLoginClick = () => {
    props.doLogin(username, password);
  };

  return (
    <ImageBackground style={{ flex: 1 }} source={require('../../resources/images/background.png')}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>CLIMBER</Text>
          </View>
          <View style={styles.loginArea}>
            <View>
              <Input
                style={styles.inputText}
                placeholder="Username"
                clearButtonMode="while-editing"
                onChangeText={handleUsernameChange}
              />
            </View>
            <View>
              <Input
                style={styles.inputText}
                placeholder="Password"
                clearButtonMode="while-editing"
                secureTextEntry
                onChangeText={handlePasswordChange}
                errorStyle={{ color: "red" }}
                errorMessage={props.errorMsg}
              />
            </View>
            <View style={styles.loginArea}>
              <Button
                raised
                buttonStyle={{borderRadius: 20, height: 50}}
                textStyle={{textAlign: 'center'}}
                title="LOGIN"
                onPress={handleLoginClick}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
  );
}

Login.propTypes = {
  doLogin: PropTypes.func,
  errorMsg: PropTypes.string
};

const mapStateToProps = (state) => {
  if (state && state.user) {
    return {
      errorMsg: state.user.errorMsg
    };
  }
  return {errorMsg: ""};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
};

const styles = StyleSheet.create({
  header: {
    height: 450,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 170
  },
  headerText: {
    fontSize: 76,
    textAlign: 'center',
    color: "white",
    fontWeight: "bold"
  },
  inputText: {
    color: "white",
    borderBottomColor: "white"
  },
  loginBtn: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderBottomStartRadius: 4,
    borderBottomEndRadius: 4,
  },
  loginArea: {
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);