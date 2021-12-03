import React, { Component } from 'react'
import { connect } from 'react-redux';
import './seeShipping.component.scss'
import Button from '@mui/material/Button';

class SeeShipping extends Component {
    
    render() {
        return (
            <div className="home-content">
                <h1>Expédition maritime</h1>
           
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.navbar.user,
        userConfig: state.navbar.userConfig
    }
};

export default connect(mapStateToProps)(SeeShipping);

