import Header from './Header/Header'
import s from './Gallery.module.css';
import Footer from '../Footer/Footer';
import GalleryBlock from './GalleryBlock/GaleryBlock';
import Book from '.././Book/Book'

function Gallery() {
    return (
        <div className={s.container}>
            <Header />
            <GalleryBlock />
            <Book />
            <Footer />
        </div>
    );
}

export default Gallery;