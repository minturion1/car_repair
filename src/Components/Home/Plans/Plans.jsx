
import s from './Plans.module.css';

function Plans() {
  return (
    <div className={s.container}>
        <div className={s.top}>
            <div className={s.text}>
                
                <div className={s.pretitle}>
                    Pricing plans
                </div>
                <div className={s.title}>
                    Choose the Right for you
                </div>
            </div>
             
            <a href='#' className={s.view_more}><span>View more</span></a>
        </div>
        <div className={s.cards}>
            <div className={s.card}>
                <div className={s.card_top}>
                    <div className={s.card_price}>
                        <div className={s.card_title}>
                            Basic Oil Change
                        </div>
                        <div className={s.card_par}>
                            Starting at
                        </div>
                        <div className={s.card_number}>
                            <span>$</span>29.99
                        </div>
                    </div>
                </div>
                <div className={s.card_list}>
                    <div className={s.card_item}><i className="fa-solid fa-circle-check"></i> Includes up to 5 quarts of conventional oil</div>
                    <div className={s.card_item}><i className="fa-solid fa-circle-check"></i> Includes up to 5 quarts of conventional oil</div>
                    <div className={s.card_item}><i className="fa-solid fa-circle-check"></i> Includes up to 5 quarts of conventional oil</div>
                    <div className={s.card_item}><i className="fa-solid fa-circle-check"></i> Includes up to 5 quarts of conventional oil</div>
                    <div className={s.card_item}><i className="fa-solid fa-circle-check"></i> Includes up to 5 quarts of conventional oil</div>
                </div>
                <div className={s.card_button}>Get Started</div>
            </div>
            <div className={s.card}>
                <div className={s.card_top}>
                    <div className={s.card_price}>
                        <div className={s.card_title}>
                            Basic Oil Change
                        </div>
                        <div className={s.card_par}>
                            Starting at
                        </div>
                        <div className={s.card_number}>
                            <span>$</span>99.99
                        </div>
                    </div>
                </div>
                <div className={s.card_list}>
                    <div className={s.card_item}><i className="fa-solid fa-circle-check"></i> Includes up to 5 quarts of conventional oil</div>
                    <div className={s.card_item}><i className="fa-solid fa-circle-check"></i> Includes up to 5 quarts of conventional oil</div>
                    <div className={s.card_item}><i className="fa-solid fa-circle-check"></i> Includes up to 5 quarts of conventional oil</div>
                    <div className={s.card_item}><i className="fa-solid fa-circle-check"></i> Includes up to 5 quarts of conventional oil</div>
                    <div className={s.card_item}><i className="fa-solid fa-circle-check"></i> Includes up to 5 quarts of conventional oil</div>
                </div>
                <div className={s.card_button}>Get Started</div>
            </div>
            <div className={s.card}>
                <div className={s.card_top}>
                    <div className={s.card_price}>
                        <div className={s.card_title}>
                            Basic Oil Change
                        </div>
                        <div className={s.card_par}>
                            Starting at
                        </div>
                        <div className={s.card_number}>
                            <span>$</span>149.99
                        </div>
                    </div>
                </div>
                <div className={s.card_list}>
                    <div className={s.card_item}><i className="fa-solid fa-circle-check"></i> Includes up to 5 quarts of conventional oil</div>
                    <div className={s.card_item}><i className="fa-solid fa-circle-check"></i> Includes up to 5 quarts of conventional oil</div>
                    <div className={s.card_item}><i className="fa-solid fa-circle-check"></i> Includes up to 5 quarts of conventional oil</div>
                    <div className={s.card_item}><i className="fa-solid fa-circle-check"></i> Includes up to 5 quarts of conventional oil</div>
                    <div className={s.card_item}><i className="fa-solid fa-circle-check"></i> Includes up to 5 quarts of conventional oil</div>
                </div>
                <div className={s.card_button}>Get Started</div>
            </div>
        </div>
        
    </div>
  );
}

export default Plans;
