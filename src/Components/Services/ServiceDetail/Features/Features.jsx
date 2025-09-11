import s from './Features.module.css';


function Features(props) {
    return (
        <div className={s.container}>
            <div className={s.title}>Features</div>
            <div className={s.grid}>
                {props.features.map((feature, index) => {
                        return (
                            <div className={s.item}>
                                <div className={s.item_number}>0{index+1}</div>
                                <div className={s.item_text}>
                                    <div className={s.item_title}>{feature.title}</div>
                                    <div className={s.item_par}>
                                        {feature.description}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Features;