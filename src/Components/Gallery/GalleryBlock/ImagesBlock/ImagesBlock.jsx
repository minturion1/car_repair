import ImageModal from './ImageModal/ImageModal';
import s from './ImagesBlock.module.css';
import { useState } from 'react';
import "react-loading-skeleton/dist/skeleton.css";
import { baseURL } from '../../../../api/servicesApi';
import { getImageById } from '../../../../api/galleryApi';
import { useQuery } from '@tanstack/react-query';


function ImagesBlock(props) {
    const images = props.images;
    const [visibleCount,setVisiblecount] = useState(6);
    const [openImageId, setOpenImageId] = useState(null);
    
    const {
        data: image = null,
        isFetching,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["gallery", "image", openImageId],
        queryFn: ()=>(getImageById(openImageId)),
        enabled: !!openImageId,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });
    if (isError) {
        return <p style={{ color: "red" }}>Error: {error.message}</p>;
    }
    console.log(image);
    function imageClick(imageId) {
        setOpenImageId(imageId);
    }
    function onClose() {
        setOpenImageId(null);
    }
    function nextImage() {
        const currentIndex = images.findIndex(img => img.documentId === openImageId);
        if (currentIndex === images.length-1) {
            setOpenImageId(images[0].documentId);
        } else {
            if(visibleCount-1===currentIndex) {
                setOpenImageId(images[0].documentId);
            } else {
                setOpenImageId(images[currentIndex + 1].documentId);
            }
        } 
    }

    function previousImage() {
        const currentIndex = images.findIndex(img => img.documentId === openImageId);
        if (currentIndex === 0) {
            if(visibleCount<images.length) {
                setOpenImageId(images[visibleCount-1].documentId);
            } else {
                setOpenImageId(images[images.length-1].documentId);
            }
            
        } else {
            setOpenImageId(images[currentIndex - 1].documentId);
        }   
    }
    function loadMore() {
        setVisiblecount(visibleCount+10)
    }
    const displayItems = props.isLoading
        ? Array(6).fill(null) 
        : images.slice(0, visibleCount);

    return(
        <div className={s.container}>
            <div className={s.gallery}>
                {openImageId && (
                    <ImageModal previousImage={previousImage} nextImage={nextImage} openedImage={image} onClose={onClose}/>

                )}
                
                {images.slice(0,visibleCount).map((img, index) => (
                
                <div className={s.galleryItem} key={img.documentId}>
                    <img loading="lazy" onClick={()=>{imageClick(img.documentId)}} src={`${baseURL}${img.image.url}`} alt={img.caption} />
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