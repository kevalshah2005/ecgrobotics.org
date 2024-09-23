import React, { useEffect, useState } from 'react'
import CardItem from '../card/CardItem'
import './Gallery3D.css'

function Gallery3D() {
    const quantity = 6;
    const [rotation, setRotationY] = useState(0);
    const [isManualRotation, setIsManualRotation] = useState(false);
    const levels = ['Diamond', 'Platinum', 'Gold', 'Silver', 'Bronze', 'Honorable Mention'];
    const [currentLevel, setCurrentLevel] = useState(0);

    useEffect(() => {
        document.querySelectorAll('.item').forEach(item => {
            const index = item.getAttribute('data-index');
            item.style.setProperty('--index', index);
        });
        document.documentElement.style.setProperty('--quantity', quantity);

        if (!isManualRotation) {
            const interval = setInterval(() => {
                setRotationY(prevRotation => {
                    const newRotation = prevRotation - 360 / quantity;
                    setCurrentLevel((currentLevel + 1) % quantity);
                    return newRotation;
                });
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [quantity, isManualRotation, currentLevel]);

    const handleLeftClick = () => {
        setIsManualRotation(true);
        setRotationY(prevRotation => prevRotation + 360 / quantity);
        setCurrentLevel((currentLevel - 1 + quantity) % quantity);
    };

    const handleRightClick = () => {
        setIsManualRotation(true);
        setRotationY(prevRotation => prevRotation - 360 / quantity);
        setCurrentLevel((currentLevel + 1) % quantity);
    };

    const handleLevelClick = (index) => {
        setIsManualRotation(true);
        let direction = 0;
        let difference = 0;
        if (index < currentLevel) {
            if (Math.abs(index - currentLevel) < quantity / 2) {
                direction = 1;
                difference = Math.abs(index - currentLevel);
            } else {
                direction = -1;
                difference = quantity - Math.abs(index - currentLevel);
            }
        } else {
            if (Math.abs(index - currentLevel) < quantity / 2) {
                direction = -1;
                difference = Math.abs(index - currentLevel);
            } else {
                direction = 1;
                difference = quantity - Math.abs(index - currentLevel);
            }
        }
        const rotationAmount = direction * difference * 360 / quantity;
        setRotationY(prevRotation => prevRotation + rotationAmount);
        setCurrentLevel(index);
    };
    
    return (
        <div className="banner">
            <div className="slider" style={{ transform: `perspective(2500px) rotateX(-4deg) rotateY(${rotation}deg)` }}>
                <div className="item" data-index="1">
                    <CardItem 
                        src=''
                        title={levels[0]}
                        number='$7500+ Annual Contribution'
                        description="Description of diamond level"
                        backgroundColor="rgba(207, 228, 238, 0.8)"
                    />
                </div>
                <div className="item" data-index="2">
                    <CardItem 
                        src=''
                        title={levels[1]}
                        number='$5000-7499 Annual Contribution'
                        description="Description of platinum level"
                        backgroundColor="rgba(192, 192, 255, 0.8)"
                    />
                </div> 
                <div className="item" data-index="3">
                    <CardItem 
                        src=''
                        title={levels[2]}
                        number='$3000-4999 Annual Contribution'
                        description="Description of gold level"
                        backgroundColor="rgba(255, 215, 0, 0.8)"
                    />
                </div>
                <div className="item" data-index="4">
                    <CardItem 
                        src=''
                        title={levels[3]}
                        number='$1000-2999 Annual Contribution'
                        description="Description of silver level"
                        backgroundColor="rgba(128, 128, 128, 0.8)"
                    />
                </div>   
                <div className="item" data-index="5">
                    <CardItem 
                        src=''
                        title={levels[4]}
                        number='$500-999 Annual Contribution'
                        description="Description of bronze level"
                        backgroundColor="rgba(139, 69, 19, 0.8)"
                    />
                </div>
                <div className="item" data-index="6">
                    <CardItem 
                        src=''
                        title={levels[5]}
                        number='$0-499 Annual Contribution'
                        description="Description of honorable mention level"
                        backgroundColor="rgba(255, 133, 43, 0.8)"
                    />
                </div>
            </div>

            <div className="navigation">
                <button className="left-btn" onClick={handleLeftClick}>{'<'}</button>
                <div className="navigation-buttons">
                    {levels.map((level, i) => (
                        <button
                            key={i}
                            onClick={() => handleLevelClick(i)}
                            className={currentLevel === i ? 'active-level' : ''}
                        >
                            {level}
                        </button>
                    ))}
                </div>
                <button className="right-btn" onClick={handleRightClick}>{'>'}</button>
            </div>
        </div>
    );
}

export default Gallery3D
