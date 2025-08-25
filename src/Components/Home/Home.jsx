import About from './About/About';
import Collab from './Collab/Collab';
import Header from './Header/Header';
import s from './Home.module.css';
import Services from './Services/Services';
import Statistics from './Statistics/Statistics';
import Testimonials from './Testimonials/Testimonials';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

function Home() {
  return (
    <div className={s.container}>
        <Header></Header>
        <Collab></Collab>
        <About></About>
        <Services></Services>
        <WhyChooseUs></WhyChooseUs>
        <Statistics></Statistics>
        <Testimonials></Testimonials>
    </div>
  );
}

export default Home;
