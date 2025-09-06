import ImageModal from './ImageModal/ImageModal';
import s from './ImagesBlock.module.css';
import { useState, useEffect } from 'react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


function ImagesBlock(props) {
    const images = props.images;
    const [visibleCount,setVisiblecount] = useState(10);
    const [openImageId, setOpenImageId] = useState(null);
    
    

    

    const openedImage = images.find(image=>image.id===openImageId);
    function imageClick(imageId) {
        setOpenImageId(imageId);
    }
    function onClose() {
        setOpenImageId(null);
    }
    function nextImage() {
        const currentIndex = images.findIndex(img => img.id === openImageId);
        if (currentIndex === images.length-1) {
            setOpenImageId(images[0].id);
        } else {
            if(visibleCount-1===currentIndex) {
                setOpenImageId(images[0].id);
            } else {
                setOpenImageId(images[currentIndex + 1].id);
            }
        } 
    }

    function previousImage() {
        const currentIndex = images.findIndex(img => img.id === openImageId);
        if (currentIndex === 0) {
            if(visibleCount<images.length) {
                setOpenImageId(images[visibleCount-1].id);
            } else {
                setOpenImageId(images[images.length-1].id);
            }
            
        } else {
            setOpenImageId(images[currentIndex - 1].id);
        }   
    }
    function loadMore() {
        setVisiblecount(visibleCount+10)
    }

    return(
        <div className={s.container}>
            <div className={s.gallery}>
                {openImageId && (
                    <ImageModal previousImage={previousImage} nextImage={nextImage} openedImage={openedImage} onClose={onClose}/>

                )}
                
                {images.slice(0,visibleCount).map((img, index) => (
                
                <div className={s.galleryItem} key={index}>
                    <img onClick={()=>{imageClick(img.id)}} src={img.image} alt={img.caption} />
                </div>
            ))}
            
            </div>
            {visibleCount<=images.length &&(
                <button onClick={()=>{loadMore()}} className={s.loadButton}>Load More</button>
            )
            }
                
            
            
        </div>
    )
}
export default ImagesBlock;