import React from "react";
import Fade from 'react-reveal/Fade';
import '../assets/styles/GlobalSpinner.css'
import loadingbar from '../assets/images/food.svg';

const imgSpinner = {
    width: '141px',
    height: 'auto'
}
export default function GloballoadingInServer({ show }) {
    return (
        <Fade>
            <div className={show ? "pending show" : "pending" }>
                <div className="centred-end">
                    <div className="message">Traitement en cours...</div>
                    <img src={loadingbar} alt="" />
                </div>
                
            </div>
        </Fade>
    );
}
