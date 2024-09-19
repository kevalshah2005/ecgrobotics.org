import React, {useEffect} from 'react'
import './Gallery.css'



const Gallery = ({images}) => {
    const numberOfImages = images.length;

    useEffect(() => {
        document.documentElement.style.setProperty('--gallery-width', `${400 * images.length}px`);
      }, [numberOfImages]);

    return (
        <div className="gallery">
            <div className="slide-track">
                <div className="images">
                    {images.map((image, index) => {
                        const delay = `${(60 / numberOfImages) * (numberOfImages - index) * -1}s`;

                        const style = {
                            animationDelay: delay,
                            position: "absolute",
                            left: "var(--gallery-width)",
                            animationName: "scrollLeft",
                            animationDuration: "60s",
                            animationTimingFunction: "linear",
                            animationIterationCount: "infinite",
                            height: "250px",
                            width: "400px",
                        };

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
    )
};

export default Gallery
