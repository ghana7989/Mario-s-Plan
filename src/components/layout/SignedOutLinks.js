import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {signIn} from "../../store/actions/authActions"
const SignedOutLinks = (props) => {
    return (
        <ul className="right">
            <li>
                <NavLink to="/signup">Sign Up</NavLink>
            </li>
            <li>
                <NavLink to="/signin">Login</NavLink>
            </li>
        </ul>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return {
        signOut: ()=>dispatch(signIn())
    }
}
export default connect(null,mapDispatchToProps) (SignedOutLinks)