
import s from './Collab.module.css';
import hyundai from './images/hyundai.png';
import jaguar from './images/jaguar.png';
import mersedes from './images/mersedes.png';
import suzuki from './images/suzuki.png';
import tesla from './images/tesla.png';
import toyota from './images/toyota.png';


function Collab() {
  return (
    <div className={s.container}>
        <div className={s.images_list}>
            <img className={s.image} src={tesla} alt="tesla" />
            <img className={s.image} src={toyota} alt="toyota" />
            <img className={s.image} src={hyundai} alt="hyundai" />
            <img className={s.image} src={mersedes} alt="mersedes" />
            <img className={s.image} src={suzuki} alt="suzuki" />
            <img className={s.image} src={jaguar} alt="jaguar" />
        </div>
    </div>
  );
}

export default Collab;
