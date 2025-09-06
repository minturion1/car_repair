import s from './GalleryBlock.module.css';
import ImagesBlock from './ImagesBlock/ImagesBlock';
import Scroller from './Scroller/Scroller';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function GalleryBlock() {
    const [filteredServiceId,setFilteredServiceId] = useState(null);
    const [images, setImages] = useState([]);
    const [allImages,setAllImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        
        axios.get("http://127.0.0.1:8000/api/v1/gallery/")
        .then((response) => {
            setImages(response.data);
            setAllImages(response.data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
    }, []);
    if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;

    function onFilter(serviceId) {
        console.log(allImages);
    if (serviceId === "all") {
        setImages(allImages);
        setFilteredServiceId(null);
    } else {
        setImages(allImages.filter(image => image.service === serviceId));
        setFilteredServiceId(serviceId);
    }
    }

    return (
        <div className={s.container}>
            <Scroller filteredServiceId={filteredServiceId} onFilter={onFilter} />
            {loading 
            ? <Skeleton style={{ marginBottom: "20px", borderRadius: "20px" }} baseColor="#2b2b2b" highlightColor="#fff" count={3} height={400} width="100%" />
            : <ImagesBlock images={images} />}
            
        </div>
    )
}

export default GalleryBlock;