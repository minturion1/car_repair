import s from './GalleryBlock.module.css';
import ImagesBlock from './ImagesBlock/ImagesBlock';
import Scroller from './Scroller/Scroller';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useQuery } from '@tanstack/react-query';
import { getImages } from '../../../api/galleryApi';
import ProgressBar from '../../comp/ProgressBar';

function GalleryBlock() {
    const [serviceId, setServiceId] = useState('all');
    const {
        data: images = [],
        isFetching,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["gallery", serviceId],
        queryFn: ()=>(getImages(serviceId)),
        enabled: !!serviceId,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });
    // console.log(images);
    if (isError) {
        return <p style={{ color: "red" }}>Error: {error.message}</p>;
    }

    return (
        <div className={s.container}>
            <Scroller serviceId={serviceId} setServiceId={setServiceId}/>

            {isLoading ? (
                <div className={s.empty}>
                    <h3>Loading...</h3>
                </div>
            ) : images.length === 0 ? (
                <div className={s.empty}>
                    <h3>No images found</h3>
                    <p>This service doesn’t have any photos yet.</p>
                </div>
            ) : (
                <ImagesBlock images={images} />
            )}
        </div>
    );
}

export default GalleryBlock;