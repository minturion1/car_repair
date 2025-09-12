import s from './Map.module.css';
import mapImage from './images/map.png';

export default function Map() {
    return (
        <div className={s.container}>
            <div className={s.title}>Hi! We are here!</div>
            <div className={s.image_container}>
                <img className={s.image} src={mapImage} alt="map" />
                <a href="#" className={s.button}>View in Google Maps <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    )
}