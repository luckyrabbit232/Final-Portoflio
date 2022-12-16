import React from "react";
import { useState } from 'react';

function PortofolioBox(portfolio){
    const item = portfolio.item;
    const handleclick = event =>{

    }

    return(
        <div className = "Portfolio_Box">
            <div className = "Portfolio_Box_Title">
                {item.name}
            </div>
            <div className = "Portfolio_image_container">
                <img src = {item.image} className = "Portfolio_Image"></img>
            </div>
        </div>
    )
}

export default PortofolioBox;