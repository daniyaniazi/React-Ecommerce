import React from "react";
import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignedIn, inverted, ...otherProps }) => (
    < button className={` ${inverted ? 'inverted' : " "} ${isGoogleSignedIn ? 'google-Sign-in' : " "} custom-button `} {...otherProps}>
        { children}
    </button >

)
export default CustomButton