import ContactsBlock from '../ContactsBlock/ContactsBlock';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import About from './About/About';
import Book from './Book/Book';
import Collab from './Collab/Collab';
import Header from './Header/Header';
import s from './Home.module.css';
import Plans from './Plans/Plans';
import Services from './Services/Services';
import Statistics from './Statistics/Statistics';
import Testimonials from './Testimonials/Testimonials';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

function Home() {
  return (
    <div className={s.container}>
        
        <Header />
        <Collab />
        <About />
        <Services />
        <WhyChooseUs />
        <Statistics />
        <Testimonials />
        <Book />
        <Plans />
        <ContactsBlock />
        <div className={s.pad}>
            <FAQ />
        </div>
        
        <Footer />
    </div>
  );
}

export default Home;
