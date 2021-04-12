import Navbar from '../../components/global/navbar';
import { connect } from 'react-redux';
import {signup_success} from '../actions/signupAction';





const mapDispatchToProps = (dispatch) => ({
    doSignup : (data)=>dispatch(signup_success(data))
});


export default connect(null,mapDispatchToProps)(Navbar);