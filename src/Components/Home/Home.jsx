import About from './About/About';
import Collab from './Collab/Collab';
import Header from './Header/Header';
import s from './Home.module.css';

function Home() {
  return (
    <div className={s.container}>
        <Header></Header>
        <Collab></Collab>
        <About></About>
    </div>
  );
}

export default Home;
