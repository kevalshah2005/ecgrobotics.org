import React, {useEffect} from 'react'
import './Gallery.css'

const Gallery = ({images, speed = 8, left = true}) => {
    const numberOfImages = images.length;
    const animationDuration = numberOfImages * speed;

    return (
        <div className="gallery">
            <div className="slide-track">
                <div className="images">
                    {images.map((image, index) => {
                        const delay = `${(animationDuration / numberOfImages) * (numberOfImages - index) * -1}s`;

                        const style = {
                            animationDelay: delay,
                            position: "absolute",
                            animationName: left ? "scrollLeft" : "scrollRight",
                            animationDuration: `${animationDuration}s`,
                            animationTimingFunction: "linear",
                            animationIterationCount: "infinite",
                            width: "400px",
                            height: "250px",
                            transition: "transform 1s",
                        };

                        if (left) {
                            style.left = `${400 * images.length}px`;
                        } else {
                            style.right = `${400 * images.length}px`;
                        }

                        return (
                            <img
                                className='image'
                                key={index}
                                src={image}
                                alt={image.alt || `Gallery Image ${index}`}
                                style={style}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Gallery
