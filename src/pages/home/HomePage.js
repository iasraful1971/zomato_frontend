import React, { useState } from 'react';
import Footer from '../../components/common/footer/Footer';
import Header from '../../components/common/header/Header';
import TabOption from '../../components/common/tabOptions/TabOption';
import Delivery from '../../components/delivery/Delivery';
import DiningOut from '../../components/DiningOut/DiningOut';
import Nightlife from '../../components/nightlife/Nightlife';

const HomePage = () => {
    const [activeTab, setActiveTab] =useState("Delivery")
    return (
        <div>
            <Header/>
            <TabOption activeTab={activeTab} setActiveTab={setActiveTab}  />
                {getCorrectScreen(activeTab)}
            <Footer/>
        </div>
    );
};

const getCorrectScreen = (tab) => {
    switch(tab){
        case "Delivery" :
        return <div><Delivery/></div>;
        case "Dining Out": 
        return <div><DiningOut/></div>;
        case "Nightlife": 
        return <div><Nightlife/></div>;
        default: 
        return <div>Delivery</div>
        
    }
}

export default HomePage;