import React from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from "./SignedOutLinks"
import { connect } from 'react-redux'


const Navbar = (props) => {
    const { auth,inits } = props
    const links = auth.uid ? <SignedInLinks inits={inits}></SignedInLinks> : <SignedOutLinks></SignedOutLinks>
return (
    <nav className="nav-wrapper grey darken-3">
        <div className="container">
            <Link to="/" className="brand-logo">
                Mario Plan
                </Link>
            {links}
        </div>
    </nav>
)
}
const mapStateToProps = (state) => {
    console.log(state)

    return {
        auth: state.firebase.auth,
        inits: state.firebase.profile.initials
    }
}
export default connect(mapStateToProps)(Navbar)