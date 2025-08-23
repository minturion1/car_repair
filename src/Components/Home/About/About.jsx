import Nav from '../../Nav/Nav';
import s from './About.module.css';

function About() {
  return (
    <div className={s.container}>
        <div className={s.left}>
            <div className={s.pretitle}>
                About Us
            </div>
            <div className={s.title}>
                Our Reputation Speaks For Itself
            </div>
            <div className={s.par}>

                AutoWorks is a family-owned and operated business that has been providing 
                auto repair services to the community for over 20 years. We pride ourselves 
                on our commitment to quality and customer satisfaction.
            </div>
        </div>
        <div className={s.right}>
            <div className={s.number}>
                20+
            </div>
            <div className={s.number_par}>
                Years of Experience
            </div>
        </div>
    </div>
  );
}

export default About;
