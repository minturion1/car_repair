
import s from './Statistics.module.css';

function Statistics() {
  return (
    <div className={s.container}>
        <hr className={s.hr1}/>
        <div className={s.stats}>
            <div className={s.stat}>
                <div className={s.number}>20</div>
                <div className={s.par}>Years of Experience</div>
            </div>
            <div className={s.stat}>
                <div className={s.number}>3.8</div>
                <div className={s.par}>Vehicle Repaired</div>
            </div>
            <div className={s.stat}>
                <div className={s.number}>30</div>
                <div className={s.par}>Technicians and Workers</div>
            </div>
            <div className={s.stat}>
                <div className={s.number}>100%</div>
                <div className={s.par}>Satisfied Customers</div>
            </div>
        </div>
        <hr className={s.hr2} />
    </div>
  );
}

export default Statistics;
