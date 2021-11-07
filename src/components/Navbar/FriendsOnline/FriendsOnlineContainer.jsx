import { connect } from "react-redux";
import FriendsOnline from "./FriendsOnline";

const mapStateToProps = (state) => {
  return {
    state: state.friendsOnlineData,
  };
};
const FriendsOnlineContainer = connect(mapStateToProps)(FriendsOnline);

export default FriendsOnlineContainer;
