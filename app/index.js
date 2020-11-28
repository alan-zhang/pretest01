import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Login from "./components/login";
import Dashboard from "./components/dashboard";

class Home extends React.Component {
  render() {
    if (this.props.user) {
      return (<Dashboard user={this.props.user} />);
    }
  
    return (
      <Login />
    );
  }
}

Home.propTypes = {
  user: PropTypes.object
};

const mapStateToProps = (state) => {
  if (state && state.user) {
    return {
      user: state.user
    };
  }
  return {user: null};
};

export default connect(mapStateToProps)(Home);
