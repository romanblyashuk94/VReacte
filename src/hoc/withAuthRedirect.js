import { connect } from "react-redux";
import { Redirect } from "react-router";

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

let withAuthRedirect = (Component) => {
  let RedirectComponent = (props) => {
    if (!props.isAuth) return <Redirect to="/login" />;
    return <Component {...props} />;
  };

  return connect(mapStateToProps)(RedirectComponent);
};

export default withAuthRedirect;
