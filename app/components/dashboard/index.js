import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ImageBackground, StyleSheet, Image, View, Text } from "react-native";
import * as Actions from "../actions";
import StepsCircle from "./StepsCircle";

const Dashboard = (props) => {
  const { user, currentSteps } = props;
  const [steps, setSteps] = useState(currentSteps);

  //Simulate walking and run current step of mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setSteps(n => {
        return n + 1;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
      props.increaseStep(steps);
      props.saveSteps(steps);
    };
  }, []);

  const percent = (steps / user.targetSteps)*100;

  return (
    <ImageBackground style={{ flex: 1 }} source={require('../../resources/images/background.png')}>
      <View style={styles.header}>
        <View>
          <Image style={styles.avatar}
            source={require("../../resources/images/avatar.png")} />
        </View>
        <View><Text style={styles.name}>{user.name}</Text></View>
      </View>
      <View style={styles.steps}>
        <StepsCircle radius={150} borderWidth={35} percent={percent} color={"#FE0315"} innerColor={"#43576F"}>
          <View>
            <Text style={styles.innerText}>Steps</Text>
            <Text style={[styles.stepsCount, styles.textCenter]}>{steps}</Text>
            <Text style={styles.textCenter}>Today</Text>
          </View>
        </StepsCircle>
      </View>
    </ImageBackground>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object,
  currentSteps: PropTypes.number
};

const mapStateToProps = (state) => {
  if (state) {
    const { user, dashboard } = state;
    return {
      user,
      currentSteps: dashboard.currentSteps || user.currentSteps
    };
  }
  return {currentStep: 0};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
};

const styles = StyleSheet.create({
  header: {
    height: 150,
    display: "flex",
    flexDirection: "row",
    marginTop: 50,
    paddingLeft: 40
  },
  avatar: {
    height: 76,
    width: 76,
    borderRadius: 50
  },
  name: {
    fontSize: 34,
    textAlign: 'center',
    fontWeight: "bold",
    paddingTop: 14,
    marginLeft: 20
  },
  steps: {
    display: "flex",
    justifyContent: 'center',
    alignItems: "center"
  },
  innerText: {
    fontSize: 38,
    textAlign: "center",
    color: "#ffffff"
  },
  stepsCount: {
    fontSize: 46,
    fontWeight: "bold",
  },
  textCenter: {
    textAlign: "center",
    color: "#ffffff"
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);