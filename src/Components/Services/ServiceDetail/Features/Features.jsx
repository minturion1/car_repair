import s from './Features.module.css';


function Features() {
    return (
        <div className={s.container}>
            <div className={s.title}>Features</div>
            <div className={s.grid}>
                <div className={s.item}>
                    <div className={s.item_number}>01</div>
                    <div className={s.item_text}>
                        <div className={s.item_title}>Tire Rotation</div>
                        <div className={s.item_par}>
                            Evenly distibues wear and tear on your tires to prolong their lifespan and improve handling
                        </div>
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.item_number}>02</div>
                    <div className={s.item_text}>
                        <div className={s.item_title}>Tire Rotation</div>
                        <div className={s.item_par}>
                            Evenly distibues wear and tear on your tires to prolong their lifespan and improve handling
                        </div>
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.item_number}>03</div>
                    <div className={s.item_text}>
                        <div className={s.item_title}>Tire Rotation</div>
                        <div className={s.item_par}>
                            Evenly distibues wear and tear on your tires to prolong their lifespan and improve handling
                        </div>
                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.item_number}>04</div>
                    <div className={s.item_text}>
                        <div className={s.item_title}>Tire Rotation</div>
                        <div className={s.item_par}>
                            Evenly distibues wear and tear on your tires to prolong their lifespan and improve handling
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;