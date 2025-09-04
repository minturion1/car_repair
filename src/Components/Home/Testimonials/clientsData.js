import client1 from './images/client1.png';
import client2 from './images/client2.png';
import client3 from './images/client3.png';
export const clients = [
    {
        id:0,
        firstName:"Sarah",
        lastName:"Tumiwa",
        location:"California, USA",
        message: `I have been taking my car to AutoWorks 
        for years and have always had a great experience. 
        The staff is knowledgeable and friendly, and they 
        always take the time to explain the repairs needed. 
        I highly recommend them for anyone looking for reliable 
        auto repair services.`,
        starsCount:5,
        img: client1,
    },
    {
        id:1,
        firstName:"John",
        lastName:"Dolton",
        location:"New York, USA",
        message: `AutoWorks saved me when my car broke down 
        unexpectedly. They quickly diagnosed the issue and had 
        me back on the road the same day. The service was fast, 
        professional, and very reasonably priced.`,
        starsCount:4,
        img: client2,
    },
    {
        id:2,
        firstName:"Angela",
        lastName:"Jolie",
        location:"Chicago, USA",
        message: `I trust AutoWorks completely with my vehicle. 
        They are honest, transparent, and never try to upsell 
        unnecessary repairs. It feels good knowing my car is in 
        such reliable hands.`,
        starsCount:2,
        img: client3,
    },
]