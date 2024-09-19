import React, {useEffect} from 'react'
import './Gallery.css'

const Gallery = ({images, left = true}) => {
    const numberOfImages = images.length;

    return (
        <div className="gallery">
            <div className="slide-track">
                <div className="images">
                    {images.map((image, index) => {
                        const delay = `${(60 / numberOfImages) * (numberOfImages - index) * -1}s`;

                        const style = {
                            animationDelay: delay,
                            position: "absolute",
                            animationName: left ? "scrollLeft" : "scrollRight",
                            animationDuration: "60s",
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
