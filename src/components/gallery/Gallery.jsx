import React, {useEffect} from 'react'
import './Gallery.css'

const Gallery = ({images, width = 400, height = 250, speed = 8, left = true}) => {
    const numberOfImages = images.length;
    const animationDuration = numberOfImages * speed;

    return (
        <div className="gallery">
            <div className="slide-track" style={{ height: `${height}px` }}>
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
                            width: `${width}px`,
                            height: `${height}px`,
                        };

                        if (left) {
                            style.left = `${width * images.length}px`;
                        } else {
                            style.right = `${width * images.length}px`;
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
