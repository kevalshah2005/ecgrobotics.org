import React, { useEffect, useState } from 'react'
import CardItem from '../card/CardItem'
import './Gallery3D.css'

function Gallery3D() {
    const quantity = 6;
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        document.querySelectorAll('.item').forEach(item => {
            const index = item.getAttribute('data-index');
            item.style.setProperty('--index', index);
        });
        document.documentElement.style.setProperty('--quantity', quantity);

        const interval = setInterval(() => {
            setRotation(prevRotation => prevRotation - 360 / quantity);
        }, 5000);

        return () => clearInterval(interval);
    }, [quantity]);
    
    return (
        <div className="banner">
            <div className="slider" style={{ transform: `perspective(2500px) rotateX(-10deg) rotateY(${rotation}deg)` }}>
                <div className="item" data-index="1">
                    <CardItem 
                        src=''
                        title='Diamond'
                        number='$7500+ Annual Contribution'
                        description="Description of diamond level"
                        backgroundColor="rgba(0, 195, 255, 0.8)"
                    />
                </div>
                <div className="item" data-index="2">
                    <CardItem 
                        src=''
                        title='Platinum'
                        number='$5000-7499 Annual Contribution'
                        description="Description of platinum level"
                        backgroundColor="rgba(192, 192, 255, 0.8)"
                    />
                </div> 
                <div className="item" data-index="3">
                    <CardItem 
                        src=''
                        title='Gold'
                        number='$3000-4999 Annual Contribution'
                        description="Description of gold level"
                        backgroundColor="rgba(255, 215, 0, 0.8)"
                    />
                </div>
                <div className="item" data-index="4">
                    <CardItem 
                        src=''
                        title='Silver'
                        number='$1000-2999 Annual Contribution'
                        description="Description of silver level"
                        backgroundColor="rgba(128, 128, 128, 0.8)"
                    />
                </div>   
                <div className="item" data-index="5">
                    <CardItem 
                        src=''
                        title='Bronze'
                        number='$500-999 Annual Contribution'
                        description="Description of bronze level"
                        backgroundColor="rgba(139, 69, 19, 0.8)"
                    />
                </div>
                <div className="item" data-index="6">
                    <CardItem 
                        src=''
                        title='Honorable Mention'
                        number='$0-499 Annual Contribution'
                        description="Description of honorable mention level"
                        backgroundColor="rgba(255, 133, 43, 0.8)"
                    />
                </div>
            </div>
        </div>
    );
}

export default Gallery3D
