import {useState} from 'react';
import s from './Testimonials.module.css';
import { clients } from './clientsData';



function Testimonials() {
    const [activeClientId, setActiveClientId] = useState(0)
    const activeClient = clients.find(client => client.id === activeClientId);
    function handleClick(clientId) {
        setActiveClientId(clientId);
    }

    return (
        <div className={s.container}>
            <div className={s.top}>
                <div className={s.text}>
                    
                    <div className={s.pretitle}>
                        Testimonials
                    </div>
                    <div className={s.title}>
                        What Our Clients Say
                    </div>
                </div>
            </div>
                <div className={s.review}>
                    {activeClient && activeClient.message}
                </div>
                <div className={s.stars}>
                    {activeClient &&
                        [...Array(activeClient.starsCount)].map((_, starIndex) => (
                        <i key={starIndex} className={`fa-solid fa-star ${s.star}`}></i>
                        ))
                    }
                    
                </div>
            <div className={s.clients}>
                {clients.map(client=> {
                    return (
                        <div onClick={()=>{handleClick(client.id)}} className={`${s.client} ${client.id === activeClientId ? s.active : ''}`}>
                            <div className={s.client_info}>
                                <img src={client.img} className={s.client_photo}></img>
                                <div className={s.client_text}>
                                    <div className={s.client_name}>{client.firstName} {client.lastName}</div>
                                    <div className={s.client_par}>{client.location}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
            </div>
            
        </div>
    );
}

export default Testimonials;
