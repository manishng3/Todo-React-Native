import { connect } from "react-redux";
import LoginScreen from "../screens/LoginScreen"
import { loginUser } from "../services/Login/actions";

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => ({
    loginUser : (userCredentials) => 
    dispatch(loginUser(userCredentials))
});

const LoginContainer = connect(mapStateToProps,mapDispatchToProps)(LoginScreen);
export default LoginContainer;