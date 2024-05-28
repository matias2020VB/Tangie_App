import React from 'react';
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import image4 from '../images/Inventory04.jpg';
import image2 from '../images/Inventory2.jpg';
import image3 from '../images/Inventory3.jpg';
import './slider.css';

function App() {
    const images = [
    {
        original: image4,
        
    },
    {
        original: image2,
        
    },
    {
        original: image3,
        
    }
    ];
    
    return (
        <div style={{width:"60vw",
                    height:"100px", 
                    margin: "auto", 
                    padding:"5%",
        }}>
            <h2 style={{textAlign:"center"}}>Inventory Management</h2>
            <ImageGallery items={images} 
            showPlayButton={false}
            showFullscreenButton={false}
            showThumbnails={true}
            showBullets={true}
            />
        </div>
    );
}
export default App;
