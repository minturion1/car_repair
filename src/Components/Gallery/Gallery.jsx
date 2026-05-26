import Book from '.././Book/Book';
import Footer from '../Footer/Footer';
import s from './Gallery.module.css';
import GalleryBlock from './GalleryBlock/GaleryBlock';
import Header from './Header/Header';

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