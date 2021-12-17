import './customButton.css';

import React from 'react';

import { Button } from 'react-bootstrap';

const CustomButton = ({ children }) => {
    return (
        <div className="buttonDiv">
            <Button 
                target="_blank"
                className="custombutton"
            >
                <h6>{children}</h6>
            </Button>
        </div>
    )
}

export default CustomButton
