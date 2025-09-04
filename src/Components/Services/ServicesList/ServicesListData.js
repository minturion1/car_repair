import brakeRepairIcon from './Icons/brake-disk.svg';
import transmissionRepair from './Icons/transmission.svg';
import suspensionRepair from './Icons/suspension.svg';
import oilChange from './Icons/oil.svg';
import electricalServices from './Icons/battery.svg';
import tireServices from './Icons/wheel.svg';
import tuneUps from './Icons/screwdriver-and-wrench.svg';
import checkEngine from './Icons/motor.svg';
import prePurchaseInspections from './Icons/fix-sign.svg';


const services = [
  {
    id:1,
    title: "Brake Repair",
    par: "Our brake repair services include inspection, diagnosis, and repair of brake components to ensure safe and reliable braking performance.",
    img: brakeRepairIcon,
  },
  {
    id:2,
    title: "Transmission Repair",
    par: "Our transmission services include fluid and filter replacement, an inspection of transmission components, and repair or replacement as needed.",
    img: transmissionRepair,
  },
  {
    id:3,
    title: "Suspension Repair",
    par: "Our suspension repair services include inspection and repair of worn components, such as shocks and struts, to improve handling and ride comfort.",
    img: suspensionRepair,
  },
  {
    id:4,
    title: "Oil Change",
    par: "Regular oil changes are essential to keep your engine running smoothly. Our oil change services include the replacement of old oil and oil filters with new, high-quality products.",
    img: oilChange,
  },
  {
    id:5,
    title: "Electrical Services",
    par: "Regular oil changes are essential to keep your engine running smoothly. Our oil change services include the replacement of old oil and oil filters with new, high-quality products.",
    img: electricalServices,
  },
  {
    id:6,
    title: "Tire Services",
    par: "Our tire services include tire rotation, balancing, and replacement, as well as alignment services to improve handling and prolong tire life.",
    img: tireServices,
  },
  {
    id:7,
    title: "Tune-Ups",
    par: "Engine tune-ups can help extend the life of your vehicle and improve its performance. Our tune-up services include the replacement of spark plugs, filters, and other components as needed.",
    img: tuneUps
  },
  {
    id:8,
    title: "Check Engine",
    par: "Our check engine light diagnostics services include computer analysis of engine codes to determine the cause of any warning lights or indicators.",
    img: checkEngine,
  },
  {
    id:9,
    title: "Pre-Purchase Inspections",
    par: "Our pre-purchase inspection services provide an unbiased evaluation of a used vehicle's condition to help you make informed purchasing decisions.",
    img: prePurchaseInspections,
  }
];

export default services;