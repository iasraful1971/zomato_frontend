import React from 'react';
import './TabOption.css';


const tabs = [
   { id:1,
    name: "Delivery",
    image: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
    inactive:"https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
    backdrop:"#FCEEC0"
},
   { id:2,
    name: "Dining Out",
    image: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    inactive:"https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
    backdrop:"#E5F3F3"
},
   { id:3,
    name: "Nightlife",
    image: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
    inactive:"https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
    backdrop:"#EDf4FF"
},

]
const TabOption = ({activeTab, setActiveTab}) => {
    return (
        <div className='tab-options'>
            <div className='max-width options-wrapper'>
                {
                    tabs.map((tab) => {
                        return(
                            <div onClick={() => setActiveTab(tab.name)}
                            className={`tab-item absolute-center cursor-pointer ${activeTab === tab.name && 'active-tab'}`}
                            >
                            <div className='tab-image-container absolute-center'
                            style={{background: `${activeTab === tab.name? tab.backdrop : ""}`}}
                            >
                            <img className='tab-image' src={activeTab === tab.name ? tab.image : tab.inactive} alt={tab.name} />
                            </div>
                            <div className='tab-name'>{tab.name}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TabOption;